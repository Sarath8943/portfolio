import React from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaFileDownload,
  FaWhatsapp,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import sarath from "../assets/sarath.jpg";

export const Home = () => {
  const handleDownloadCV = () => {
    const cvUrl =
      "https://drive.google.com/file/d/1O3YG2uHRu2jq7MCsaVQAS_brgC24uC2s/view?usp=drive_link";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Sarath_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#0f172a] text-white overflow-hidden"
    >
      
      <div className="absolute -top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-20 flex flex-col justify-center min-h-screen gap-12 md:flex-row items-center">
        
  
        <motion.div
          className="md:w-1/2 space-y-4 text-center md:text-left"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl sm:text-6xl text-gray-400">Hai,</h2>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-400">
            I'm SARATH
          </h1>

          <h3 className="text-xl sm:text-2xl font-medium flex flex-wrap gap-2 justify-center md:justify-start">
            And I'm a{" "}
            <span className="text-blue-400">
              <TypeAnimation
                sequence={[
                  "FULL-STACK DEVELOPER",
                  2000,
                  "FRONTEND DEVELOPER",
                  2000,
                  "WEB DEVELOPER",
                  2000,
                  "REACT DEVELOPER",
                  2000,
                ]}
                speed={50}
                deletionSpeed={30}
                cursor
                repeat={Infinity}
              />
            </span>
          </h3>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-md">
            Passionate web developer with expertise in modern JavaScript
            frameworks. Specializing in responsive, user-friendly applications
            with clean code.
          </p>

      
          <div className="flex gap-5 mt-6 justify-center md:justify-start text-2xl">
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


          <div className="mt-8 flex justify-center md:justify-start">
            <button
              onClick={handleDownloadCV}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-7 py-3 rounded-full flex items-center gap-3 shadow-lg"
            >
              <FaFileDownload />
              Download CV
            </button>
          </div>
        </motion.div>

        
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-2xl opacity-70 animate-pulse" />
            <img
              src={sarath}
              alt="Sarath"
              className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full object-cover border-4 border-blue-400"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};
