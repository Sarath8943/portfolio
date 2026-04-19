import { useState, useEffect } from "react";
import { Github, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food Ordering Web App",
      short:
        "A full-featured food ordering web application with authentication, cart, and order management.",
      tech: "React, Tailwind.css, Express.js, Node.js, MongoDB",
      video:
        "https://res.cloudinary.com/dmw2439kf/video/upload/v1769356101/Untitled_design_advwd0.mp4",
      live: "https://food-eat-chi.vercel.app",
      repo: "https://github.com/Sarath8943/FoodEat",
    },
    {
      id: 2,
      title: "Temple Web App",
      short: "update soon",
      tech: "React, Tailwind.css, Express.js, Node.js, MongoDB",
      video: "", // No video yet
      live: "https://pathaikkara-mana-bhagavathy-temple.vercel.app",
      repo: "https://github.com/Sarath8943/pathaikkaramana",
    },
  ];

  return (
    <section className="w-full bg-[#0F172A] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
          My <span className="text-green-500">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-video bg-black flex items-center justify-center">
                {project.video ? (
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-gray-400 text-center">
                    No video available
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.short}</p>
                <p className="text-green-500 mb-4">{project.tech}</p>
                <div className="flex gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      Live
                    </a>
                  )}
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition"
                    >
                      Repo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
