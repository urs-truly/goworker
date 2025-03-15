"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaBriefcase, FaUsers, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

export const MotionDiv = motion.div;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-6">
      <div className="w-full flex justify-end">
        <Button className="px-4 py-2">Login</Button>
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <h1 className="text-4xl font-bold text-gray-900">GoWorker</h1>
        <p className="mt-4 text-lg text-gray-600">
          Subtext
        </p>
        <p className="mt-4 text-gray-600">
          GoWorker is a commute management application designed for employees within an organization
          to plan their daily commute to and from workplaces and home. Our primary goal is to offer a
          feasible alternative for corporate environments to reach their carbon credit goals while
          ensuring employee productivity and comfort. Commuting has never been more fun or healthier!
        </p>
        <Button className="mt-6 px-6 py-3 text-lg">Get Started</Button>
      </MotionDiv>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl">
        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <FaBriefcase className="text-blue-500 text-4xl" />
            <h3 className="text-xl font-semibold mt-4">For Employers</h3>
            <p className="text-gray-600 text-center mt-2">
              Subtext
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <FaUsers className="text-green-500 text-4xl" />
            <h3 className="text-xl font-semibold mt-4">For Workers</h3>
            <p className="text-gray-600 text-center mt-2">
              Subtext
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex flex-col items-center">
            <FaRocket className="text-purple-500 text-4xl" />
            <h3 className="text-xl font-semibold mt-4">Fast & Reliable</h3>
            <p className="text-gray-600 text-center mt-2">
              Subtext
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
