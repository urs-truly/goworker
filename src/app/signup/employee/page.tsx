"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { API_ENDPOINTS } from "@/utils/apiEndpoints";



export default function EmployeeSignup() {
  const [formData, setFormData] = useState({
    employeeName: "",
    companyCode: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { employeeName, companyCode, password, confirmPassword } = formData;

    if (!employeeName.trim() || !companyCode.trim() || !password.trim()) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    try {
      const verifyResponse = await fetch(`${API_ENDPOINTS.COMPANY_RETRIVE}/${companyCode}`);
      const verifyData = await verifyResponse.json();

      if (!verifyResponse.ok || !verifyData.valid) {
        setError("Invalid company code.");
        setLoading(false);
        return;
      }

      const registerResponse = await fetch(API_ENDPOINTS.EMPLOYEE_INSERT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          employee_name: employeeName,
          company_code: companyCode,
          password,
        }),
        mode: "cors",
      });

      if (!registerResponse.ok) {
        throw new Error("Failed to submit data.");
      }

      setSubmitted(true);
      setError("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Employee Signup</h2>
        {submitted ? (
          <div className="text-center">
            <p className="text-green-500">Form submitted successfully!</p>
            <Button className="mt-4" onClick={() => router.push("/")}>Return Home</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              name="employeeName"
              placeholder="Employee Name"
              value={formData.employeeName}
              onChange={handleChange}
            />
            <Input
              name="companyCode"
              placeholder="Company Code"
              value={formData.companyCode}
              onChange={handleChange}
            />
            <Input
              name="password"
              placeholder="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Input
              name="confirmPassword"
              placeholder="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full mt-4" disabled={loading}>
              {loading ? "Processing..." : "Register"}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
