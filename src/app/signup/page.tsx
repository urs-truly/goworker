"use client";

import { Button } from "@/components/ui/button";

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-900">Sign Up</h1>
      <div className="flex flex-col gap-4 w-full max-w-sm">
        <Button className="w-full px-6 py-3 text-lg">Register as Organization</Button>
        <Button className="w-full px-6 py-3 text-lg">Register as Employee</Button>
      </div>
    </div>
  );
}
