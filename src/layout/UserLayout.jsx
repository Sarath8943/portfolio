import React from "react";

import { Home } from "../page/Home";
import { About } from "../page/About";
import { Skill } from "../page/Skill";
import { Projects } from "../page/Projects";
import { Contact } from "../page/Contact";
import { Header } from "../compontes/users/Header";
import { Footer } from "../compontes/users/Footer";

export const UserLayout = () => {
  return (
    <div className="min-h-screen bg-[#0f172a]">
      <Header/>

      <main>
      <section id="home" className="scroll-mt-16">
       <Home/>
      </section>

      <section id="about" className="scroll-mt-16">
        <About />
      </section>

      <section id="skills" className="scroll-mt-16">
        <Skill />
      </section>

      <section id="projects" className="scroll-mt-16">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-16">
        <Contact />
      </section>
      </main>

    <Footer/>
    </div>
  );
};
