import { useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaBolt,
  FaServer,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiJavascript,
  SiCloudinary,
  SiVercel,
} from "react-icons/si";
import * as SiIcons from "react-icons/si";

const RenderIcon = SiIcons.SiRender || FaServer;

const skills = [
  { name: "React.js", icon: FaReact, color: "#38bdf8" },
  { name: "Node.js", icon: FaNodeJs, color: "#22c55e" },
  { name: "Express.js", icon: SiExpress, color: "#9ca3af" },
  { name: "TypeScript", icon: SiTypescript, color: "#3b82f6" },
  { name: "JavaScript", icon: SiJavascript, color: "#facc15" },
  { name: "MongoDB", icon: SiMongodb, color: "#16a34a" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Databases", icon: FaDatabase, color: "#a855f7" },
  { name: "Git & GitHub", icon: FaGitAlt, color: "#f97316" },
  { name: "Cloudinary", icon: SiCloudinary, color: "#0ea5e9" },
  { name: "Render", icon: RenderIcon, color: "#46e3b7" },
  { name: "Vercel", icon: SiVercel, color: "#e5e7eb" },
];

export const Skill = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".skill-card");

    const revealOnScroll = () => {
      const triggerBottom = window.innerHeight * 0.85;
      cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
          setTimeout(() => card.classList.add("show"), index * 100);
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  return (
    <section className="w-full bg-[#0f172a] text-white">
      
      {/* Heading */}
      <div className="pt-10 pb-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold inline-flex items-center gap-2">
          <FaBolt className="text-yellow-400" />
          <span>My Tech Stack</span>
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                      gap-6 sm:gap-8 max-w-5xl mx-auto px-4 pb-10">
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <div
              key={skill.name}
              className="skill-card opacity-0 translate-y-8 flex flex-col items-center justify-center 
                         p-4 sm:p-6 bg-[#1a2238] rounded-xl border border-gray-700
                         shadow-md hover:shadow-yellow-400/30 hover:scale-110 hover:border-yellow-400
                         transition-all duration-500 ease-out"
            >
              <div
                className="skill-icon text-4xl sm:text-5xl mb-3 transition-transform duration-700"
                style={{ color: skill.color }}
              >
                <Icon />
              </div>
              <p className="text-sm sm:text-base font-medium text-center">
                {skill.name}
              </p>
            </div>
          );
        })}
      </div>

      {/* Animations */}
      <style>
        {`
          .skill-card.show {
            opacity: 1;
            transform: translateY(0);
          }

          .skill-card.show .skill-icon {
            transform: rotate(20deg) scale(1.2);
          }
        `}
      </style>
    </section>
  );
};
