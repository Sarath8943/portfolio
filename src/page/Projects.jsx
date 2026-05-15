import { Github, ExternalLink, Zap } from "lucide-react";
import { motion } from "framer-motion";

const MotionDiv = motion.div;

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food Ordering Web App",
      category: "Full Stack (MERN) - Food ordering",
      short:
        "This is a food ordering web application that allows users to browse the menu, add items to cart, and place orders quickly. The application is designed to provide a smooth user experience across all devices.",
      tech: ["React", "Tailwind CSS", "Express.js", "Node.js", "MongoDB", "Cloudinary"],
      video:
        "https://res.cloudinary.com/dmw2439kf/video/upload/v1769356101/Untitled_design_advwd0.mp4",
      live: "https://food-eat-chi.vercel.app",
      repo: "https://github.com/Sarath8943/FoodEat",
    },
    {
      id: 2,
      title: "Temple Web App",
      category: "Full Stack (MERN) - Temple",
      short:
        "This is a modern, responsive website designed to make temple information easy to access. It features a clean interface for temple history, pooja details, events, and timings.",
      tech: ["React", "Tailwind CSS", "Express.js", "Node.js", "MongoDB", "Cloudinary"],
      video:
        "https://res.cloudinary.com/dmw2439kf/video/upload/v1776587785/temple-final.mp4_ssvfxn.mp4",
      live: "https://pathaikkara-mana-bhagavathy-temple.vercel.app",
      repo: "https://github.com/Sarath8943/pathaikkaramana",
    },
  ];

  return (
    <section className="relative w-full bg-[#0f172a] py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-12 sm:mb-16 lg:mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
            Latest <span className="text-white/20 italic">Projects</span>
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:gap-20">
          {projects.map((project, index) => (
            <MotionDiv
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="relative w-full lg:w-3/5 group">
                <div className="absolute -inset-1 bg-blue-500/20 rounded-2xl sm:rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000" />
                <div className="relative aspect-video rounded-2xl sm:rounded-[2rem] overflow-hidden border border-white/10 bg-black">
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-auto">
                    <span className="inline-block max-w-full px-3 sm:px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[9px] sm:text-[10px] font-bold text-white uppercase tracking-wide sm:tracking-widest whitespace-normal">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-2/5 space-y-5 sm:space-y-6 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <div className="shrink-0 p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <Zap size={20} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-base sm:text-lg leading-relaxed font-medium">
                  {project.short}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-[11px] sm:text-xs font-mono text-blue-300 uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col min-[420px]:flex-row items-stretch min-[420px]:items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4 sm:pt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 sm:px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95"
                  >
                    View Live <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all active:scale-95 flex items-center justify-center"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};
