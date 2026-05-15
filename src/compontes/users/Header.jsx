import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/95 text-white border-b border-blue-800 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-3 flex items-center justify-between">
        <a href="#home" className="text-base sm:text-lg font-bold tracking-wide text-white">
          SARATH
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-xl text-blue-400 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label="Toggle Menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

       
        <nav className="hidden md:flex gap-6 lg:gap-8 text-sm font-medium">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative group hover:text-blue-400 transition"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>
      </div>

     
      {isOpen && (
        <div className="md:hidden bg-[#0f172a] border-t border-blue-800 px-4 py-4 shadow-xl animate-slideDown">
          <nav className="flex flex-col gap-1 text-sm">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-md px-3 py-3 hover:bg-white/10 hover:text-blue-400 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}

     
      <style>
        {`
          @keyframes slideDown {
            0% { opacity: 0; transform: translateY(-8px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-slideDown {
            animation: slideDown 0.25s ease-out;
          }
        `}
      </style>
    </header>
  );
};
