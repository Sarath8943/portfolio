import React from "react";
import sarath from "../assets/sarath.jpg";

export const About = () => {
  return (
    <section className="w-full bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
      
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={sarath}
                alt="Profile"
                className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 object-cover rounded-full"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600 to-red-600 blur-2xl opacity-70 -z-10"></div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-orange-500">Me</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              Aspiring full-stack web developer with expertise in the MERN stack
              (MongoDB, Express.js, React, Node.js). I specialize in designing
              and building robust, responsive web applications, handling
              everything from intuitive front-end interfaces to scalable
              back-end databases and APIs. Passionate about creating seamless
              digital experiences, I continuously strive to implement best
              practices and innovative solutions in web development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
