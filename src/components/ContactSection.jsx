// src/components/ContactSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-10 max-w-md mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <motion.form
        className="flex flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-700"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-700"
        />
        <textarea
          placeholder="Your Message"
          className="p-3 rounded-lg border border-gray-300 dark:border-gray-700"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
