
import React, { useState, useEffect } from "react";
import { ThemeContext } from "./context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ExperienceSection from "./components/ExperienceSection.jsx";
import BlogSection from "./components/BlogSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState("projects");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const handleTabChange = (tab) => {
    setLoading(true);
    setTimeout(() => {
      setActiveTab(tab);
      setLoading(false);
    }, 500);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className="min-h-screen bg-gray-50 dark:bg-[#071026] text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <div className="container mx-auto px-4">
          <Header activeTab={activeTab} setActiveTab={handleTabChange} />
          <Hero onContactClick={() => handleTabChange("contact")} />

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-10 h-10 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-10"
              >
                {activeTab === "projects" && <ProjectsSection />}
                {activeTab === "skills" && <SkillsSection />}
                {activeTab === "experience" && <ExperienceSection />}
                {activeTab === "blog" && <BlogSection />}
                {activeTab === "contact" && <ContactSection />}
              </motion.div>
            </AnimatePresence>
          )}

          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
