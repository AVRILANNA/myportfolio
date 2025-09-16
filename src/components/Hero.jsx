import React from "react";
import { motion } from "framer-motion";

export default function Hero({ onContactClick }) {
  return (
    <motion.section
      className="text-center space-y-4 py-16"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold"
        style={{ perspective: 1000 }}
        whileHover={{ rotateX: 5, rotateY: -5 }}
      >
        Hi, I’m <span className="text-indigo-600">Martha Thuku</span>
      </motion.h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        A passionate Web Developer & Cybersecurity Enthusiast. I build secure, scalable and beautiful web solutions.
      </p>
      <motion.button
        whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(99, 102, 241, 0.6)" }}
        whileTap={{ scale: 0.95 }}
        onClick={onContactClick}
        className="px-6 py-3 rounded-full bg-indigo-600 text-white shadow-md"
      >
        Get in Touch
      </motion.button>
    </motion.section>
  );
}
