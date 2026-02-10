'use client';

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function DataProtectionPolicyPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-8 bg-linear-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
          Data Protection Policy
        </h1>

        <div className="space-y-8 text-white/80 leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              1. Purpose
            </h2>
            <p>
              This Data Protection Policy outlines how Neernaya collects,
              processes, stores, and protects user and device data. We are
              committed to ensuring that all data handled through our IoT
              monitoring platform is secure and processed responsibly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              2. Scope
            </h2>
            <p>
              This policy applies to all users, administrators, partners, and
              systems interacting with Neernaya services, including web
              applications, APIs, and IoT-connected monitoring devices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              3. Types of Data We Protect
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Personal user data (Name, Email, Organization)</li>
              <li>Device identification and configuration data</li>
              <li>Environmental and sensor monitoring data</li>
              <li>System logs and security audit records</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              4. Data Protection Principles
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Data is collected only for legitimate monitoring purposes</li>
              <li>Only necessary data is processed and stored</li>
              <li>Data is protected using encryption and access control</li>
              <li>Data is retained only as long as required</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              5. Security Measures
            </h2>
            <p>
              Neernaya implements multiple layers of security including secure
              authentication, encrypted data transmission (HTTPS/TLS), secure
              cloud storage, and role-based access control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              6. Data Access Control
            </h2>
            <p>
              Access to sensitive data is restricted to authorized personnel
              only. Access permissions are reviewed regularly to ensure
              compliance with security best practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              7. Data Breach Response
            </h2>
            <p>
              In the event of a data breach, Neernaya will investigate, mitigate
              risks, and notify affected users and relevant authorities in
              accordance with applicable regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              8. User Responsibilities
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Maintain secure account credentials</li>
              <li>Report suspicious activity immediately</li>
              <li>Follow device security and installation guidelines</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              9. Policy Updates
            </h2>
            <p>
              This policy may be updated periodically to reflect changes in
              technology, regulations, or operational practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">
              10. Contact
            </h2>
            <p>
              For data protection related concerns, users can contact the
              Neernaya support or security team.
            </p>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
