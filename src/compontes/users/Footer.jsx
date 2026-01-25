
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0F172A] via-gray-900 to-black text-gray-200 py-6 shadow-inner">
      <div className="max-w-6xl mx-auto px-4 flex justify-center">
        <p className="text-sm md:text-base text-center">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">SARATH</span>. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};
