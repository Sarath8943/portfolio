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
    <header className="fixed top-0 w-full z-50 bg-[#0f172a] text-white border-b border-blue-800 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
      
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-xl text-blue-400 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

       
        <nav className="hidden md:flex gap-8 text-sm font-medium ml-auto">
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
        <div className="md:hidden bg-[#0f172a] border-t border-blue-800 px-4 py-4 animate-slideDown">
          <nav className="flex flex-col gap-4 text-sm">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition"
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
