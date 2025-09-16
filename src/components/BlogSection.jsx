// src/components/BlogSection.jsx
import React from "react";
import { motion } from "framer-motion";

const posts = [
  { title: "Used React to build my portfolio", link: "#" },
  { title: "Understanding TailwindCSS", link: "#" },
  { title: "ISC2 Member currently doing Certified cyber security", link: "#" },
  {title: "Built a website for an upcoming musician and linked all his youtube videos"}

];

export default function BlogSection() {
  return (
    <section className="py-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Blog</h2>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        {posts.map((post, idx) => (
          <motion.a
            key={idx}
            href={post.link}
            className="p-4 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-md hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {post.title}
          </motion.a>
        ))}
      </div>
    </section>
  );
}
