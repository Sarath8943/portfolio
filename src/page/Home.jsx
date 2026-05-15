import React from "react";
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import sarath from "../assets/sarath.jpg";

const MotionDiv = motion.div;

export const Home = () => {
  return (
    <section
      className="relative min-h-svh bg-[#0f172a] text-white overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute -top-24 -left-24 w-56 h-56 sm:w-80 sm:h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 -right-24 w-56 h-56 sm:w-80 sm:h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24 pb-16 sm:pt-28 lg:pt-32 flex min-h-svh flex-col-reverse md:flex-row items-center justify-center gap-10 lg:gap-14">
        {/* LEFT CONTENT */}
        <MotionDiv
          className="w-full md:w-1/2 space-y-4 text-center md:text-left"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-4xl lg:text-5xl text-gray-400">
            Hai,
          </h2>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-300 leading-tight">
            I'm SARATH
          </h1>

          <h3 className="text-base sm:text-xl lg:text-2xl font-medium flex flex-wrap gap-2 justify-center md:justify-start leading-snug">
            <span>And I'm a</span>
            <span className="text-blue-400 max-w-full break-words">
              <TypeAnimation
                sequence={[
                  "FULL-STACK DEVELOPER (MERN STACK)",
                  2000,
                  "FRONTEND DEVELOPER",
                  2000,
                  "REACT DEVELOPER",
                  2000,
                ]}
                speed={50}
                cursor
                repeat={Infinity}
              />
            </span>
          </h3>

          <p className="text-gray-300 text-sm sm:text-base lg:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed">
            Passionate web developer with expertise in modern JavaScript
            frameworks. Specializing in responsive, user-friendly applications
            with clean and scalable code.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start text-xl sm:text-2xl">
            <a
              href="https://www.linkedin.com/in/sarath-c12"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-blue-600 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Sarath8943"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-gray-700 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://wa.me/8943926520"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/10 hover:bg-green-500 transition"
            >
              <FaWhatsapp />
            </a>
          </div>

          {/* VIEW CV BUTTON */}
          <div className="mt-8 flex justify-center md:justify-start">
            <a
              href="/sarath.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-7 py-3 rounded-full shadow-lg hover:scale-105 transition"
            >
              View CV
            </a>
          </div>
        </MotionDiv>

        {/* RIGHT IMAGE */}
        <MotionDiv
          className="w-full md:w-1/2 flex justify-center"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-2xl opacity-70 animate-pulse" />
            <img
              src={sarath}
              alt="Sarath"
              className="relative w-44 h-44 min-[380px]:w-56 min-[380px]:h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full object-cover border-4 border-blue-400"
            />
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};
