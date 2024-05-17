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
      <main className="max-w-7xl mx-auto flex">
        {/* <WaterDropGrid /> */}
        <div className="min-w-[65px] md:hidden"></div>
        <div className="flex flex-col flex-1 justify-center items-center p-4 overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  );
}
