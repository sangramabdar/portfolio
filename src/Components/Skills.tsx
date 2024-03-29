"use client";

import React from "react";
import Element from "react-scroll/modules/components/Element";
import { AiFillHtml5 } from "react-icons/ai";
import { FaAws, FaCss3Alt } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import { SiDocker, SiLinux, SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";

import { SiMongodb, SiTailwindcss } from "react-icons/si";
import Reveal from "./Reveal";
import cn from "@/utils/cn";

const Section = Element;

type Skill = {
  name: string;
  element: React.ReactNode;
};

const skills: Skill[] = [
  {
    name: "TypeScript",
    element: (
      <SiTypescript
        className="w-full h-full object-cover"
        color="rgb(49,120,198)"
      />
    ),
  },
  {
    name: "React",
    element: (
      <FaReact className="w-full h-full object-cover" color="rgb(97,218,251)" />
    ),
  },
  {
    name: "Next.js",
    element: (
      <TbBrandNextjs className="w-full h-full object-cover" color="white" />
    ),
  },
  {
    name: "JavaScript",
    element: (
      <SiJavascript
        className="w-full h-full object-cover"
        color="rgb(247,223,30)"
      />
    ),
  },
  {
    name: "Node.js",
    element: (
      <FaNodeJs className="w-full h-full object-cover" color="rgb(84,162,69)" />
    ),
  },
  {
    name: "HTML",
    element: (
      <AiFillHtml5 className="w-full h-full object-cover" color="orange" />
    ),
  },

  {
    name: "CSS",
    element: (
      <FaCss3Alt
        className="w-full h-full object-cover"
        color="rgb(0,145,213)"
      />
    ),
  },
  {
    name: "Tailwind CSS",
    element: (
      <SiTailwindcss
        className="w-full h-full object-cover"
        color="rgb(56,189,248)"
      />
    ),
  },
  {
    name: "Redux",
    element: (
      <SiRedux className="w-full h-full object-cover" color="rgb(118,74,188)" />
    ),
  },

  {
    name: "MongoDB",
    element: (
      <SiMongodb
        className="w-full h-full object-cover"
        color="rgb(0,237,100)"
      />
    ),
  },
  {
    name: "Docker",
    element: (
      <SiDocker className="w-full h-full object-cover" color="rgb(29,99,237)" />
    ),
  },
  {
    name: "AWS",
    element: (
      <FaAws className="w-full h-full object-cover" color="rgb(255,255,254)" />
    ),
  },
  {
    name: "Linux",
    element: (
      <FcLinux className="w-full h-full object-cover" color="rgb(0,0,0)" />
    ),
  },
];

interface TechnologyProps {
  skill: Skill;
}

function Skill({ skill }: React.PropsWithChildren<TechnologyProps>) {
  return (
    <div
      className={cn(
        "sm:w-40 p-2 space-y-2 text-center rounded-lg flex flex-col justify-between items-center transition-all duration-200 hover:scale-105 shadow-md shadow-tertiary/10 group ring-tertiary/10 ring-1 hover:ring-secondary/80"
      )}
    >
      <div className={cn("flex w-full h-full justify-center items-center")}>
        {skill.element}
      </div>
      <p
        className={cn(
          "font-normal text-t-secondary group-hover:text-secondary"
        )}
      >
        {skill.name}
      </p>
    </div>
  );
}

function Skills() {
  return (
    <Section
      className={cn("flex flex-col w-full py-[72px] md:p-24")}
      name="skills"
    >
      <Reveal>
        <h1 className={cn("font-black text-3xl md:text-4xl text-t-primary")}>
          Skills
          <span className="text-secondary">.</span>
        </h1>
      </Reveal>

      <div
        className={cn(
          "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 grid-rows-2 gap-8 sm:gap-8 mt-10 w-fit"
        )}
      >
        {skills.map((skill: Skill, index: number) => {
          return (
            <Reveal key={skill.name} className="w-full">
              <Skill skill={skill} />
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export default Skills;
