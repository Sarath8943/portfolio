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
    <div>
      <Header/>

      <section id="home">
       <Home/>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

    <Footer/>
    </div>
  );
};
