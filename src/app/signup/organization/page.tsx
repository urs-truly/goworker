"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "C:\\Users\\augus\\OneDrive\\Documents\\Hacksus\\goworker\\src\\components\\ui\\input";
import { useRouter } from "next/navigation";

export default function OrganizationSignup() {
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCompanyName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName.trim()) {
      setError("Company name is required.");
      return;
    }

    try {
      const response = await fetch("https://e11c-1-7-226-194.ngrok-free.app/company/Insert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ company_name: companyName }),
        mode: "cors",
      });

      if (!response.ok) {
        throw new Error("Failed to submit data.");
      }

      setSubmitted(true);
      setError("");
    } catch (error) {
      console.error("Error submitting form:", error);
      setError("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Organization Signup</h2>
        {submitted ? (
          <div className="text-center">
            <p className="text-green-500">Form submitted successfully!</p>
            <Button className="mt-4" onClick={() => router.push("/")}>Return Home</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Company Name"
              value={companyName}
              onChange={handleChange}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <Button type="submit" className="w-full mt-4">
              Register
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
