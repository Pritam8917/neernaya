'use client'

import React from "react"

import { Suspense } from 'react'

export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<div className="min-h-screen bg-background" />}>{children}</Suspense>
}
