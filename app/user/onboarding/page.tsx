"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { UserSidebar } from "@/components/layout/user-sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Loader2, CheckCircle2, Clock, AlertCircle } from "lucide-react";

const steps = [
  { id: 2, label: "Request Submitted" },
  { id: 3, label: "Payment" },
  { id: 4, label: "Device Activation" },
];

export default function Onboarding() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentStep, setCurrentStep] = useState(2);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const step = searchParams.get("step");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (step) setCurrentStep(parseInt(step));
  }, [searchParams]);

  const renderStep = () => {
    switch (currentStep) {
      case 2:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                <CheckCircle2 className="text-green-400" size={40} />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Device Order Submitted Successfully
              </h2>
              <p className="text-white/60 max-w-md mx-auto">
                Your water quality monitoring device order has been placed
                successfully. Your selected water parameters will be
                pre-configured into your device after admin verification.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 space-y-4 shadow-xl">
              <div className="flex items-start gap-4">
                <Clock className="text-blue-400 mt-1 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Order Verification In Progress
                  </h3>
                  <p className="text-white/60 text-sm">
                    Our technical team is verifying your device order and
                    selected monitoring parameters to ensure accurate
                    calibration and configuration.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2
                  className="text-blue-400 mt-1 shrink-0"
                  size={24}
                />
                <div>
                  <h3 className="font-semibold text-white mb-1">
                    Configuration Notification
                  </h3>
                  <p className="text-white/60 text-sm">
                    You will receive an email once your device configuration and
                    parameter setup is completed and ready for activation.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <AlertCircle
                  className="text-blue-400 mt-1 shrink-0"
                  size={24}
                />
                <div>
                  <h3 className="font-semibold text-white mb-1">Status</h3>
                  <p className="text-white/60 text-sm">
                    Current Status:
                    <Badge className="ml-2 border-white/20 text-white">
                      Order Under Review
                    </Badge>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Button
                variant="outline"
                onClick={() => router.push("/user/devices")}
                className="border-white/20 text-white hover:bg-white/10 p-5 cursor-pointer"
              >
                Go to Dashboard
              </Button>

              <Button
                onClick={() => {
                  setIsProcessing(true);
                  setTimeout(() => {
                    setCurrentStep(3);
                    setIsProcessing(false);
                  }, 2000);
                }}
                disabled={isProcessing}
                className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-600/50 disabled:hover:bg-blue-600/50 p-5 "
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Verifying Order...
                  </>
                ) : (
                  "Proceed to Payment"
                )}
              </Button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-white">
                Confirm Your Device Purchase
              </h2>
              <p className="text-white/60 max-w-md mx-auto">
                Complete payment to finalize your device purchase and enable
                real-time monitoring of your selected water quality parameters.
              </p>
            </div>

            <div className="max-w-md mx-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 shadow-xl">
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-white/60">Device Monitoring Plan</span>
                  <span className="text-white font-semibold">₹299.99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">
                    Device Setup & Configuration
                  </span>
                  <span className="text-white font-semibold">₹9.99</span>
                </div>
                <div className="border-t border-white/10 pt-4 flex justify-between">
                  <span className="text-white font-bold">Total</span>
                  <span className="text-blue-400 font-bold text-lg">
                    ₹309.98
                  </span>
                </div>
              </div>

              <Button
                onClick={() => {
                  setIsProcessing(true);
                  setTimeout(() => {
                    setCurrentStep(4);
                    setIsProcessing(false);
                  }, 1500);
                }}
                disabled={isProcessing}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-5 cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-600/50 disabled:hover:bg-blue-600/50"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  "Pay & Activate Device"
                )}
              </Button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto">
                <CheckCircle2 className="text-green-400" size={40} />
              </div>
              <h2 className="text-3xl font-bold text-white">
                Payment Confirmed
              </h2>
              <p className="text-white/60 max-w-md mx-auto">
                Your device purchase is confirmed. Activate your device to start
                real-time monitoring of your selected water quality parameters.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 text-center space-y-4 shadow-xl">
              <h3 className="text-xl font-semibold text-white">
                Activate Your Monitoring Device
              </h3>
              <p className="text-white/60 text-sm">
                Power on your device and pair it with your account to start
                monitoring parameters like pH, TDS, Turbidity, Dissolved Oxygen
                and more in real time.
              </p>

              <Button
                onClick={() => {
                  setIsProcessing(true);
                  setTimeout(() => router.push("/user/devices"), 1500);
                }}
                disabled={isProcessing}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-5 cursor-pointer disabled:cursor-not-allowed disabled:bg-blue-600/50 disabled:hover:bg-blue-600/50"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Activating Device...
                  </>
                ) : (
                  "Device Activated — Start Monitoring"
                )}
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />
      <main className="min-h-screen bg-[#0A0A0A] text-white pt-20">
        <div className="flex">
          <div className="fixed left-0 top-20 h-[calc(100vh-5rem)] w-64 border-r border-white/10 bg-[#0A0A0A] z-40">
            <UserSidebar />
          </div>

          <div className="flex-1 ml-60 pr-8 py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex justify-between items-center mb-8">
                  {steps.map((step, idx) => (
                    <div key={step.id} className="flex items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition ${
                          currentStep >= step.id
                            ? "bg-blue-600 text-white"
                            : "bg-white/5 border border-white/10 text-white/60"
                        }`}
                      >
                        {currentStep > step.id ? (
                          <CheckCircle2 size={20} />
                        ) : (
                          step.id
                        )}
                      </div>

                      <p
                        className={`text-sm font-medium ml-3 ${
                          currentStep >= step.id
                            ? "text-white"
                            : "text-white/60"
                        }`}
                      >
                        {step.label}
                      </p>

                      {idx < steps.length - 1 && (
                        <div
                          className={`flex-1 h-1 mx-4 rounded-full transition ${
                            currentStep > step.id
                              ? "bg-blue-600"
                              : "bg-white/10"
                          }`}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {renderStep()}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
