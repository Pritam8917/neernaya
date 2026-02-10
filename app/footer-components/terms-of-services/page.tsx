'use client';

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-8 bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Terms of Service
        </h1>

        <div className="space-y-8 text-white/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using Neernaya, you agree to be bound by these
              Terms of Service. If you do not agree with these terms, you must
              not use our platform or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Description of Service
            </h2>
            <p>
              Neernaya provides IoT-based environmental and water quality
              monitoring services, including real-time data visualization,
              analytics, alerts, and device management tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. User Accounts
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>You are responsible for maintaining account security.</li>
              <li>You must provide accurate and complete information.</li>
              <li>You are responsible for all activities under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Device Usage and Responsibility
            </h2>
            <p>
              Users are responsible for proper installation, calibration, and
              maintenance of connected IoT devices. Neernaya is not liable for
              damages caused by improper installation or misuse of devices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Data Accuracy and Monitoring Limitations
            </h2>
            <p>
              While we strive to provide accurate monitoring data, Neernaya does
              not guarantee 100% accuracy due to environmental factors,
              connectivity issues, or hardware limitations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Prohibited Activities
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Unauthorized access to systems or data</li>
              <li>Reverse engineering or tampering with devices</li>
              <li>Using the platform for illegal activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Service Availability
            </h2>
            <p>
              We may update, modify, or temporarily suspend services for
              maintenance or upgrades without prior notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. Limitation of Liability
            </h2>
            <p>
              Neernaya shall not be liable for indirect, incidental, or
              consequential damages resulting from use of the platform or
              device-generated data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              these Terms of Service or pose security risks.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Changes to Terms
            </h2>
            <p>
              We may update these Terms of Service from time to time. Continued
              use of the platform after updates means you accept the revised
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              11. Contact Information
            </h2>
            <p>
              For questions regarding these Terms of Service, please contact the
              Neernaya support team.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
