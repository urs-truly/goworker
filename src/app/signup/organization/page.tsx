"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { API_ENDPOINTS } from "@/utils/apiEndpoints";
import { Loader2 } from "lucide-react"; // Import spinner icon from lucide-react

export default function OrganizationSignup() {
  const [companyName, setCompanyName] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // New loading state
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

    setLoading(true); // Start loading

    try {
      const response = await fetch(API_ENDPOINTS.COMPANY_INSERT, {
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
    } finally {
      setLoading(false); // Stop loading after request completes
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

            <Button
              type="submit"
              className="w-full mt-4 flex items-center justify-center"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <>
                  <Loader2 className="animate-spin mr-2" /> Processing...
                </>
              ) : (
                "Register"
              )}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}