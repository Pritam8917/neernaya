"use client";

import { motion } from "framer-motion";
import { Cpu, Wifi, Globe, Building2, GraduationCap } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import Image from "next/image";

/* ---------------- TEAM DATA ---------------- */
const teams = [
  {
    name: "Web Team",
    icon: Globe,
    members: [
      { name: "Pritam Das Adhikari", img: "/pritam-das-adhikari.jpeg" },
      { name: "Ayush Bardhan Tripathy", img: "/ayush-bardhan-tripathy.jpeg" },
    ],
  },
  {
    name: "IoT Team",
    icon: Wifi,
    members: [
      { name: "Ratnakar Sahoo", img: "/ratnakar-sahoo.jpeg" },
      { name: "Priyadarshani Mahapatra", img: "/priyadarshani-mahapatra.jpeg" },
      { name: "Sohan kumar nayak", img: "/sohan-kumar-nayak.jpeg" },
    ],
  },
  {
    name: "Sensor Team",
    icon: Cpu,
    members: [
      { name: "Sushree Stuti Bandana Swain", img: "/stuti.jpeg" },
      { name: "Asmit Patel", img: "/asmit-patel.jpeg" },
      { name: "Sai Smruti Patro", img: "/saismruti-patro.jpeg" },
      { name: "Suchismita Sahoo", img: "/suchismita-sahoo.jpeg" },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <div className="px-6 md:px-10 py-24 max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            About Neernaya
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto md:text-lg leading-relaxed">
            Neernaya is an advanced IoT-driven water monitoring system designed
            to ensure real-time analysis of water quality parameters. Our
            solution empowers smarter environmental decisions, promoting
            sustainability, safety, and efficient resource management.
          </p>
        </motion.div>

        {/* COMPANY + COLLEGE */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {[
            {
              icon: Building2,
              title: "Company",
              name: "NEMHANS Solutions Pvt Ltd, Bhubaneswar, Odisha",
              desc: "NEMHANS Solutions Pvt Ltd specializes in developing intelligent IoT solutions aimed at solving real-world environmental challenges through innovation and technology.",
            },
            {
              icon: GraduationCap,
              title: "Institution",
              name: "VSSUT, Burla",
              desc: "Veer Surendra Sai University of Technology (VSSUT), Burla, is a premier engineering institution fostering innovation, research, and technical excellence.",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-cyan-400/40 transition"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon className="text-cyan-400 w-6 h-6" />
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                </div>
                <p className="text-lg font-medium">{item.name}</p>
                <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* MENTOR + OWNER */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          {[
            {
              name: "Managovinda Mishra",
              role: "Founder & Director, NEMHANS Solutions Pvt Ltd",
              img: "/managobinda-mishra.jpeg",
            },
            {
              name: "Dr. Raseswari Pradhan",
              role: "Assistant Professor, Department of Electrical Engineering, VSSUT Burla",
              img: "/raseswari-pradhan.jpeg",
            },
          ].map((person, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center hover:shadow-cyan-500/20 hover:shadow-lg transition"
            >
              <Image
                src={person.img}
                alt={person.name}
                height={120}
                width={120}
                className="w-32 h-32 rounded-full mx-auto mb-5 object-cover border-2 border-cyan-400 shadow-lg shadow-cyan-500/20"
              />
              <h3 className="text-xl font-semibold">{person.name}</h3>
              <p className="text-gray-400">{person.role}</p>
            </motion.div>
          ))}
        </div>

        {/* PROJECT DESCRIPTION */}
        <motion.div className="text-center mb-20">
          <h2 className="text-3xl font-semibold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Project Overview</h2>
          <p className="text-gray-400 max-w-3xl mx-auto md:text-lg leading-relaxed">
            Neernaya continuously monitors critical water quality parameters
            such as pH, turbidity, total dissolved solids (TDS), temperature,
            and conductivity using advanced sensor integration. The system
            provides real-time insights, enabling proactive decision-making for
            water safety, environmental sustainability, and smart infrastructure
            management.
          </p>
        </motion.div>
        {/* MISSION */}
        <motion.div className="text-center mb-20">
          <h2 className="text-3xl font-semibold mb-6 bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">Our Mission</h2>

          <p className="text-gray-400 max-w-3xl mx-auto md:text-lg leading-relaxed">
            Our mission is to leverage cutting-edge IoT technology to create
            reliable, scalable, and intelligent water monitoring systems that
            contribute to a sustainable future. We aim to bridge the gap between
            environmental challenges and smart technological solutions.
          </p>
        </motion.div>

        {/* TEAMS */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-6 bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
            Our Teams
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
            Our multidisciplinary team consists of dedicated individuals working
            collaboratively across software, hardware, and data domains to build
            a robust and scalable solution.
          </p>
          <div className="space-y-14">
            {teams.map((team, index) => {
              const Icon = team.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-xl"
                >
                  {/* Team Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="text-cyan-400 w-6 h-6" />
                    <h3 className="text-2xl font-semibold">{team.name}</h3>
                  </div>

                  {/* Members Row */}
                  <div className="flex gap-8 overflow-x-auto scrollbar-hide">
                    {team.members.map((member, i) => (
                      <div
                        key={i}
                        className="min-w-35 text-center group cursor-pointer"
                      >
                        {/* Image */}
                        <div className="relative">
                          <Image
                            src={member.img}
                            alt={member.name}
                            height={120}
                            width={120}
                            className="w-32 h-32 rounded-2xl object-cover mx-auto border border-white/20 transition duration-300"
                          />

                        </div>

                        {/* Name */}
                        <p className="mt-4 text-sm text-gray-300 font-medium">
                          {member.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
