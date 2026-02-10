"use client";

import React from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  IconDroplet,
} from "@tabler/icons-react";

export default function Signup() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-black via-zinc-950 to-zinc-900 flex items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-[-20%] left-[-10%] w-150 h-150 bg-blue-500 rounded-full blur-[180px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-150 h-150 bg-cyan-400 rounded-full blur-[180px]" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-xl bg-blue-500/20">
              <IconDroplet className="text-blue-400" size={22} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Create Account</h2>
              <p className="text-sm text-white/60">Join Neernaya platform</p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  id="firstname"
                  placeholder="Rahul"
                  type="text"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  id="lastname"
                  placeholder="Sharma"
                  type="text"
                  className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                />
              </LabelInputContainer>
            </div>

            <LabelInputContainer>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="you@example.com"
                type="email"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                placeholder="••••••••"
                type="password"
                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
              />
            </LabelInputContainer>

            <Button className="w-full rounded-xl bg-linear-to-r from-blue-600 to-cyan-500 hover:opacity-90 transition font-semibold py-5 flex items-center justify-center cursor-pointer">
              Create Account
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}

function LabelInputContainer({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("flex flex-col space-y-2", className)}>{children}</div>;
}
