"use client";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-6 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <div className="flex items-center gap-2 text-slate-500">
          <MapPin size={18} className="text-purple-500" />
          <span className="text-sm italic">West Bengal, India</span>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold dark:text-white">
            Soumyadip <span className="text-purple-500"> Maity</span>
          </h3>
          <p className="text-xs uppercase tracking-widest text-slate-500">
            Full Stack Developer | MERN Stack 
          </p>
          <p className="text-[10px] text-slate-400 mt-4">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
        <p className="text-sm text-slate-500">
          Made with
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity }}
            className="text-red-500"
          >
            ❤️
          </motion.span>
          by Soumyadip
        </p>
      </div>
    </footer>
  );
}
