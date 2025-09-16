import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Portfolio Website", description: "A personal portfolio built with React and TailwindCSS." },
  { title: "Attendance System", description: "Facial recognition-based student attendance app." },
  { title: "Cybersecurity Lab", description: "Hands-on penetration testing practice setup." },
];

export default function ProjectsSection() {
  return (
    <motion.div
      className="grid md:grid-cols-3 gap-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{ show: { transition: { staggerChildren: 0.15 } } }}
    >
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          className="p-6 rounded-2xl bg-white dark:bg-gray-800"
          variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
          whileHover={{ scale: 1.05, boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}
        >
          <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
