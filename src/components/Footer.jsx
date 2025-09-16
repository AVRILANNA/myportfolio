import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
      <div className="flex justify-center gap-4 mb-2">
        <a href="https://github.com/AVRILANNA" target="_blank" rel="noreferrer"><Github /></a>
        <a href="https://linkedin.com/in/MarthaThuku" target="_blank" rel="noreferrer"><Linkedin /></a>
        <a href="mailto:marthathuku92@gmail.com"><Mail /></a>
      </div>
      © {new Date().getFullYear()} MARTHA WAMBUI THUKU— All Rights Reserved.
    </footer>
  );
}
