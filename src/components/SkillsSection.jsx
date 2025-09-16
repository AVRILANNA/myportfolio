// src/components/SkillsSection.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "TailwindCSS","Python", "Data analysis", "ethical hacker"];

export default function SkillsSection() {
  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900 rounded-full text-indigo-700 dark:text-indigo-200 font-medium"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
