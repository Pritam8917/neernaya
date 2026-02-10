'use client';

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-8 bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <div className="space-y-8 text-white/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Introduction
            </h2>
            <p>
              Welcome to Neernaya. We are committed to protecting your personal
              data and your right to privacy. This Privacy Policy explains how
              we collect, use, store, and protect your information when you use
              our IoT water monitoring platform and related services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Information We Collect
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Account information (Name, Email, Organization)</li>
              <li>Device data from connected IoT sensors</li>
              <li>Water quality monitoring parameters</li>
              <li>Usage analytics and system logs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>To provide real-time water monitoring insights</li>
              <li>To improve system performance and reliability</li>
              <li>To detect anomalies and send alerts</li>
              <li>To provide customer and technical support</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. IoT Device Data
            </h2>
            <p>
              Neernaya collects environmental and water quality sensor data from
              connected monitoring devices. This data is used strictly for
              monitoring, analytics, and reporting purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Data Security
            </h2>
            <p>
              We implement industry-standard encryption, secure authentication,
              and protected cloud infrastructure to ensure your data is safe
              from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Data Sharing
            </h2>
            <p>
              We do not sell or rent your personal data. Data may be shared only
              with authorized service providers required to operate the
              platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. User Rights
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Access your stored data</li>
              <li>Request data correction</li>
              <li>Request data deletion</li>
              <li>Withdraw data processing consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically. Changes will be
              posted on this page with updated revision dates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact the Neernaya support team.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
