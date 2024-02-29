"use client";

import Element from "react-scroll/modules/components/Element";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import cn from "@/utils/cn";
import Reveal from "./Reveal";

const Section = Element;

function Information() {
  return (
    <div
      className={cn(
        "space-y-4 text-tertiary font-extralight text-lg md:text-2xl"
      )}
    >
      <Reveal>
        <span>
          Hello! I'm Sangram Abdar from Pune. I hold a postgraduate degree in
          MCA (Computer Applications) and find joy in problem-solving through
          coding. I consistently aim to deliver my best, giving 100% to every
          task."
        </span>
      </Reveal>

      <Reveal>
        <span>
          I possess a strong understanding of a diverse range of technologies
          related to software development, from concept to implementation.
        </span>
      </Reveal>

      <Reveal>
        <h1>Apart from coding, some other activities that I love to do!</h1>
      </Reveal>

      <ul className={cn("space-y-2")}>
        <Reveal>
          <li className={cn("flex items-center space-x-4")}>
            <HiOutlineHandThumbUp className={cn("text-secondary")} />
            <span className={cn("ml-2")}>Playing football</span>
          </li>
        </Reveal>
        <Reveal>
          <li className={cn("flex items-center space-x-4")}>
            <HiOutlineHandThumbUp className={cn("text-secondary")} />
            <span className={cn("ml-2")}>Playing video games</span>
          </li>
        </Reveal>
      </ul>
    </div>
  );
}

function About() {
  return (
    <Section className="flex flex-col py-[72px] md:p-24" name="about">
      <Reveal>
        <h1 className={cn("font-black text-3xl md:text-4xl text-t-primary")}>
          About
          <span className="text-secondary">.</span>
        </h1>
      </Reveal>

      <div className="mt-10">
        <Information />
      </div>
    </Section>
  );
}

export default About;
