import * as React from "react";
import { cn } from "@/lib/utils"; // Make sure this function exists

const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("border rounded-lg p-6 shadow", className)}>
    {children}
  </div>
);

const CardHeader = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("border-b p-4", className)}>{children}</div>
);

const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("p-4", className)}>{children}</div>
);

export { Card, CardHeader, CardContent };
