import React from "react";
import Element from "react-scroll/modules/components/Element";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";

const Section = Element;

type Skill = {
  name: string;
  element: React.ReactNode;
};

const skills: Skill[] = [
  {
    name: "React",
    element: (
      <FaReact className="w-full h-full object-cover" color="rgb(97,218,251)" />
    ),
  },
  {
    name: "Redux",
    element: (
      <SiRedux className="w-full h-full object-cover" color="rgb(118,74,188)" />
    ),
  },
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
    name: "JavaScript",
    element: (
      <SiJavascript
        className="w-full h-full object-cover"
        color="rgb(247,223,30)"
      />
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
    name: "Node.js",
    element: (
      <FaNodeJs className="w-full h-full object-cover" color="rgb(84,162,69)" />
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
    name: "Firebase",
    element: (
      <SiFirebase
        className="w-full h-full object-cover"
        color="rgb(253,198,54)"
      />
    ),
  },
  {
    name: "React Native",
    element: (
      <FaReact className="w-full h-full object-cover" color="rgb(97,218,251)" />
    ),
  },
];

interface TechnologyProps {
  skill: Skill;
}

function Skill({ skill }: React.PropsWithChildren<TechnologyProps>) {
  return (
    <div className="sm:w-40 p-2 space-y-2 text-center rounded-md flex flex-col justify-between items-center transition-all duration-200 hover:scale-105 shadow-lg shadow-primary-2">
      <div className="flex w-full h-full justify-center items-center">
        {skill.element}
      </div>
      <p className="text-tertiary">{skill.name}</p>
    </div>
  );
}

function Skills() {
  return (
    <Section
      className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-center mt-40 items-center"
      name="skills"
    >
      <h1 className="text-tertiary font-bold text-2xl border-solid border-b-4 border-b-secondary-1">
        Skills
      </h1>
      <p className="mt-4 text-tertiary/60 opacity-">
        // these are the technologies I have worked with
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 sm:gap-8 mt-10">
        {skills.map((skill: Skill, index: number) => {
          return <Skill skill={skill} key={index} />;
        })}
      </div>
    </Section>
  );
}

export default Skills;
