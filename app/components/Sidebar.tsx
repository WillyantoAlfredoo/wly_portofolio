"use client"; // Wajib untuk mendeteksi interaksi scroll di Next.js

import { useEffect, useState } from "react";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  // Sensor otomatis untuk mendeteksi posisi scroll layar secara presisi
  useEffect(() => {
    const sections = ["home", "about", "projects", "contact"];
    
    const observerOptions = {
      root: null,
      // Diperbaiki: Menggunakan margin yang lebih seimbang agar mendeteksi section yang mendominasi layar
      rootMargin: "-15% 0px -40% 0px",
      threshold: 0.2, // Memastikan section terlihat 20% sebelum memicu perpindahan menu
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Hanya ganti menu aktif jika section benar-benar sedang mendominasi layar aktif
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed top-0 left-0 h-screen w-64 bg-transparent p-8 flex flex-col justify-between text-white z-50 opacity-75 hover:opacity-100 transition-all duration-500 ease-out group/sidebar">
      
      {/* Bagian Logo Atas */}
      <div className="transition-transform duration-500 group-hover/sidebar:translate-x-1">
        <span className="text-xl font-bold tracking-widest text-zinc-300 group-hover/sidebar:text-white transition-colors duration-300">
          System <span className="text-zinc-100">Insight</span>
        </span>
      </div>

      {/* Bagian Menu Navigasi (Otomatis Berubah Aktif/Tidak) */}
      <nav className="flex-1 flex flex-col justify-center gap-12">
        {[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "projects", label: "Projects" }, 
          { id: "contact", label: "Contact" },
        ].map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group text-sm tracking-widest uppercase font-semibold flex items-center justify-between transition-all duration-300 hover:translate-x-3 ${
                isActive
                  ? "text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {item.label}
              <span
                className={`h-[1px] transition-all duration-300 ${
                  isActive
                    ? "w-10 bg-white"
                    : "w-0 bg-zinc-400 group-hover:w-6"
                }`}
              ></span>
            </a>
          );
        })}
      </nav>

      {/* Bagian Footer Bawah */}
      <div className="text-xs tracking-wider text-zinc-500 font-mono transition-transform duration-500 group-hover/sidebar:translate-x-1">
        [ CODED IN 2026 ]
      </div>
    </aside>
  );
}