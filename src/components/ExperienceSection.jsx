// src/components/ExperienceSection.jsx
import React from "react";
import { motion } from "framer-motion";

const experiences = [
  { role: "Web Developer", company: "selfemployment", duration: "2023 - Present" },
  { role: "Cybersecurity attachment", company: "County Assembly of Murang'a", duration: "2024" },
  {role:"school based projects"}
];

export default function ExperienceSection() {
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Experience</h2>
      <div className="space-y-4 max-w-3xl mx-auto">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600 dark:text-gray-300">{exp.company}</p>
            <span className="text-sm text-gray-500">{exp.duration}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
