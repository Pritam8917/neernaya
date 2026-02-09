"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { UserSidebar } from "@/components/layout/user-sidebar";
import { Button } from "@/components/ui/button";
import {
  FlaskConical,
  Waves,
  Beaker,
  Mountain,
  ShieldCheck,
  AlertTriangle,
  Wind,
  Droplets,
  CheckCircle2,
  Loader2,
} from "lucide-react";

export default function Apply() {
  const router = useRouter();
  const [selectedParams, setSelectedParams] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const parameters = [
    {
      id: "ph",
      icon: FlaskConical,
      name: "pH Level",
      description: "Monitor water acidity and alkalinity in real-time",
    },
    {
      id: "turbidity",
      icon: Waves,
      name: "Turbidity",
      description: "Measure suspended particles affecting water clarity",
    },
    {
      id: "tds",
      icon: Beaker,
      name: "Total Dissolved Solids (TDS)",
      description: "Track dissolved salts and minerals in water",
    },
    {
      id: "hardness",
      icon: Mountain,
      name: "Water Hardness",
      description: "Monitor calcium and magnesium concentration levels",
    },
    {
      id: "chlorine",
      icon: ShieldCheck,
      name: "Chlorine",
      description: "Measure disinfection chemical levels in water",
    },
    {
      id: "ammonia",
      icon: AlertTriangle,
      name: "Ammonia",
      description: "Detect harmful nitrogen-based contamination",
    },
    {
      id: "dissolved-oxygen",
      icon: Wind,
      name: "Dissolved Oxygen (DO)",
      description: "Monitor oxygen levels important for water health",
    },
    {
      id: "salinity",
      icon: Droplets,
      name: "Salinity",
      description: "Track salt concentration in water sources",
    },
  ];

  const toggleParameter = (id: string) => {
    setSelectedParams((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id],
    );
  };

  const handleSubmit = async () => {
    if (selectedParams.length === 0) {
      alert("Please select at least one parameter");
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      router.push("/user/onboarding?step=2");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="flex pt-20">
        <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 border-r border-white/10 bg-black z-40">
          <UserSidebar />
        </div>
        <div className="flex-1 relative overflow-hidden">
          {/* Subtle Cyan Glow */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-72 left-1/2 -translate-x-1/2 w-175 h-175 bg-black blur-[200px] rounded-full" />
          </div>

          <div className="max-w-5xl ml-96 pr-8 py-12">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4 tracking-tight">
                Configure Water Monitoring
              </h1>

              <p className="text-gray-400 max-w-xl text-lg">
                Select water quality parameters to monitor using NeerNaya IoT
                smart sensors.
              </p>
            </div>

            {/* Parameter Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {parameters.map((param) => {
                const Icon = param.icon;
                const selected = selectedParams.includes(param.id);

                return (
                  <div
                    key={param.id}
                    onClick={() => toggleParameter(param.id)}
                    className={`
                    cursor-pointer
                    relative
                    rounded-2xl
                    border
                    p-7
                    transition-all duration-300
                    backdrop-blur-xl

                    ${
                      selected
                        ? "border-cyan-400 bg-cyan-500/10 shadow-[0_0_35px_rgba(34,211,238,0.15)]"
                        : "border-white/10 bg-white/5 hover:border-cyan-400/40"
                    }
                  `}
                  >
                    <div className="flex gap-5 items-start">
                      <div
                        className={`p-3 rounded-xl ${selected ? "bg-cyan-500/20" : "bg-white/5"}`}
                      >
                        <Icon className="text-cyan-400" size={26} />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-2">
                          {param.name}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed">
                          {param.description}
                        </p>
                      </div>
                    </div>

                    {selected && (
                      <CheckCircle2 className="absolute top-5 right-5 text-cyan-400" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Selected Counter */}
            {selectedParams.length > 0 && (
              <div className=" mb-10 rounded-xl border border-cyan-400/30 bg-cyan-500/10 p-5 flex items-center gap-3">
                <CheckCircle2 className="text-cyan-400" size={22} />
                <span className="text-white font-medium">
                  {selectedParams.length} parameter
                  {selectedParams.length !== 1 ? "s" : ""} selected
                </span>
              </div>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-5">
              <Button
                variant="outline"
                asChild
                disabled={isSubmitting}
                className="border-white/20 bg-white/5 hover:bg-white/10 text-white"
              >
                <Link href="/">Back</Link>
              </Button>

              <Button
                onClick={handleSubmit}
                disabled={isSubmitting || selectedParams.length === 0}
                className=" bg-cyan-500 hover:bg-cyan-600 text-black font-semibold shadow-lg hover:shadow-cyan-500/30 px-8 cursor-pointer disabled:cursor-not-allowed disabled:bg-cyan-500/50 disabled:hover:bg-cyan-500/50 disabled:shadow-none"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Configuring...
                  </>
                ) : (
                  "Continue Setup"
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
