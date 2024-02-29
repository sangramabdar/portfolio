"use client";

import About from "@/Components/About";
import Contact from "@/Components/Contact";
import Header from "@/Components/Header";
import Hero from "@/Components/Hero";
import SideNavBar from "@/Components/NavBar";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import WaterDropGrid from "@/Components/WaterDropGrid";

export default function Page() {
  return (
    <>
      <Header />
      <SideNavBar />
      <main className="max-w-7xl mx-auto flex flex-col justify-center items-center px-8 pl-20">
        {/* <WaterDropGrid /> */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
