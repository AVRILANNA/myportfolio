import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Header({ activeTab, setActiveTab }) {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <header className="flex justify-between items-center py-4">
      <h1 className="text-2xl font-bold tracking-tight">My Portfolio</h1>
      <nav className="flex gap-3">
        {["projects", "skills", "experience", "blog", "contact"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-3 py-1 rounded-full text-sm font-medium transition ${
              activeTab === tab
                ? "bg-indigo-600 text-white shadow"
                : "hover:bg-indigo-100 dark:hover:bg-indigo-900"
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-4 p-2 rounded-full hover:bg-indigo-100 dark:hover:bg-indigo-900 transition"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>
    </header>
  );
}