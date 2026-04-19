import { Github, ExternalLink, Zap } from "lucide-react";
import { motion } from "framer-motion";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Food Ordering Web App",
      category: "Full Stack (MERN) • Food ordering",
      short: "A premium food delivery engine featuring real-time state management and secure payment flows.",
      tech: ["React, Tailwind.css, Express.js, Node.js, MongoDB, Cloudinary"],
      video: "https://res.cloudinary.com/dmw2439kf/video/upload/v1769356101/Untitled_design_advwd0.mp4", 
      live: "https://food-eat-chi.vercel.app",
      repo: "https://github.com/Sarath8943/FoodEat",
    },
    {
      id: 2,
      title: "Temple Web App",
      category: "Full Stack (MERN) • Temple ",
      short: "A scalable platform for cultural organizations to manage devotees, donations, and event logistics.",
      tech: ["React, Tailwind.css, Express.js, Node.js, MongoDB, Cloudinary"],
      video: "https://res.cloudinary.com/dmw2439kf/video/upload/v1776587785/temple-final.mp4_ssvfxn.mp4",
      live: "https://pathaikkara-mana-bhagavathy-temple.vercel.app",
      repo: "https://github.com/Sarath8943/pathaikkaramana",
    },
  ];

  return (
    <section className="relative w-full bg-[#020617] py-32 px-6 overflow-hidden">
      {/* BACKGROUND MESH - Green maatti Indigo/Blue aakki */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="flex flex-col items-center mb-24 text-center">
          <h2 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-6">
            Latest <span className="text-white/20 italic">Projects</span>
          </h2>
          {/* Green line maatti Blue gradient aakki */}
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        </div>

        {/* PROJECT LIST */}
        <div className="grid grid-cols-1 gap-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 items-center`}
            >
              {/* VIDEO SECTION */}
              <div className="relative w-full lg:w-3/5 group">
                <div className="absolute -inset-1 bg-blue-500/20 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative aspect-video rounded-[2rem] overflow-hidden border border-white/10 bg-black">
                  <video
                    src={project.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* INFO SECTION */}
              <div className="w-full lg:w-2/5 space-y-6">
                <div className="flex items-center gap-3">
                  {/* Icon color maatti Blue aakki */}
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                    <Zap size={20} />
                  </div>
                  <h3 className="text-4xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                </div>

                <p className="text-slate-400 text-lg leading-relaxed font-medium">
                  {project.short}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-mono text-blue-400/80 uppercase tracking-tighter">
                      {t.replace(/ /g, '')}
                    </span>
                  ))}
                </div>

                {/* BUTTONS - Green ozhivakki Blue aakki */}
                <div className="flex items-center gap-6 pt-6">
                  <a
                    href={project.live}
                    target="_blank"
                    className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95"
                  >
                    View Live <ExternalLink size={18} />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    className="p-3 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                  >
                    <Github size={24} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};