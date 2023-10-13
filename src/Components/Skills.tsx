import React, { useRef } from "react";
import Element from "react-scroll/modules/components/Element";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaAngular, FaNodeJs } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";

const Section = Element;

type Skill = {
  name: string;
  element: React.ReactNode;
};

const skills: Skill[] = [
  {
    name: "React",
    element: <FaReact color="rgb(97,218,251)" />,
  },
  {
    name: "Redux",
    element: <SiRedux color="rgb(118,74,188)" />,
  },
  {
    name: "TypeScript",
    element: <SiTypescript color="rgb(49,120,198)" />,
  },
  {
    name: "JavaScript",
    element: <SiJavascript color="rgb(247,223,30)" />,
  },
  {
    name: "HTML",
    element: <AiFillHtml5 color="orange" />,
  },
  {
    name: "CSS",
    element: <FaCss3Alt color="rgb(0,145,213)" />,
  },
  {
    name: "Tailwind CSS",
    element: <SiTailwindcss color="rgb(56,189,248)" />,
  },

  {
    name: "Node.js",
    element: <FaNodeJs color="rgb(84,162,69)" />,
  },
  {
    name: "MongoDB",
    element: <SiMongodb color="rgb(0,237,100)" />,
  },
  {
    name: "Firebase",
    element: <SiFirebase color="rgb(253,198,54)" />,
  },
  {
    name: "React Native",
    element: <FaReact color="rgb(97,218,251)" />,
  },
];

interface TechnologyProps {
  skill: Skill;
}

function Skill({ skill }: React.PropsWithChildren<TechnologyProps>) {
  return (
    <div className="w-full p-2 text-center rounded-md flex flex-col justify-between items-center transition-all duration-200 hover:scale-105 shadow-md shadow-gray-600">
      <div className="flex object-cover justify-center items-center">
        {skill.element}
      </div>
      <p>{skill.name}</p>
    </div>
  );
}

function Skills() {
  return (
    <Section
      className=" max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-center items-center"
      name="skills"
    >
      <h1 className="font-bold text-2xl border-solid border-b-4 border-b-violet-600">
        Skills
      </h1>
      <p className="mt-2 text-gray-400">
        // these are the technologies I have worked with
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 mt-3">
        {skills.map((skill: Skill, index: number) => {
          return <Skill skill={skill} key={index} />;
        })}
      </div>
    </Section>
  );
}

export default Skills;
