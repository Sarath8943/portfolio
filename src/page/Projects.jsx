import { useState, useEffect } from "react";
import { Github, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food Ordering Web App",
      short:
        "A full-featured food ordering web application with authentication, cart, and order management.",
      tech: "React, Tailwind.css, Express.js, Node.js, MongoDB, Cloudinary",
      video:
        "https://res.cloudinary.com/dmw2439kf/video/upload/v1769356101/Untitled_design_advwd0.mp4",
      live: "https://food-eat-chi.vercel.app",
      repo: "https://github.com/Sarath8943/FoodEat",
    },
    {
      id: 2,
      title: "Temple Web App",
      short: "update soon",
      tech: "React, Tailwind.css, Express.js, Node.js, MongoDB, Cloudinary",
      video: "", // No video yet
      live: "",
      repo: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const current = projects[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((p) => (p === 0 ? projects.length - 1 : p - 1));
  };

  const handleNext = () => {
    setCurrentIndex((p) => (p === projects.length - 1 ? 0 : p + 1));
  };

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <section className="w-full bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 sm:px-6 md:px-16 py-10">
        {/* LEFT */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
            Latest <span className="text-green-500">Project</span>
          </h2>

          <h3 className="text-xl sm:text-2xl font-semibold">
            {current.title}
          </h3>

          <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed">
            {current.short}
          </p>

          <p className="text-green-500 mt-5 text-sm sm:text-base">
            {current.tech}
          </p>

          <div className="border-t border-gray-700 mt-6" />

          <div className="flex gap-4 mt-6">
            {current.live && (
              <a
                href={current.live}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-500 transition"
              >
                <ArrowUpRight size={20} />
              </a>
            )}
            {current.repo && (
              <a
                href={current.repo}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-green-500 transition"
              >
                <Github size={20} />
              </a>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative order-1 md:order-2">
          <div className="rounded-xl overflow-hidden border-4 border-blue-950 shadow-lg bg-black">
            {current.video && (
              <video
                key={current.video}
                src={current.video}
                autoPlay
                loop
                muted
                playsInline
                className="
                  w-full 
                  h-[240px]
                  sm:h-[320px]
                  md:h-[420px]
                  lg:h-[520px]
                  xl:h-[330px]
                  object-contain
                "
              />
            )}
          </div>

          <div className="absolute bottom-4 right-4 flex gap-2 sm:gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 sm:w-11 sm:h-11 bg-[#111827] hover:bg-green-500 rounded-md flex items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 sm:w-11 sm:h-11 bg-[#111827] hover:bg-green-500 rounded-md flex items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {projects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  currentIndex === idx
                    ? "bg-green-500 scale-125"
                    : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
