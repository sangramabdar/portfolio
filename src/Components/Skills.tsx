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
    element: <FaReact size={"100px"} color="rgb(97,218,251)" />,
  },
  {
    name: "Redux",
    element: <SiRedux size={"80px"} color="rgb(118,74,188)" />,
  },
  {
    name: "TypeScript",
    element: <SiTypescript size={"80px"} color="rgb(49,120,198)" />,
  },
  {
    name: "JavaScript",
    element: <SiJavascript color="rgb(247,223,30)" size={"80px"} />,
  },
  {
    name: "HTML",
    element: <AiFillHtml5 size={"100px"} color="orange" />,
  },
  {
    name: "CSS",
    element: <FaCss3Alt size={"100px"} color="rgb(0,145,213)" />,
  },
  {
    name: "Tailwind CSS",
    element: <SiTailwindcss size={"100px"} color="rgb(56,189,248)" />,
  },

  {
    name: "Node.js",
    element: <FaNodeJs size={"100px"} color="rgb(84,162,69)" />,
  },
  {
    name: "MongoDB",
    element: <SiMongodb size={"100px"} color="rgb(0,237,100)" />,
  },
  {
    name: "Firebase",
    element: <SiFirebase size={"100px"} color="rgb(253,198,54)" />,
  },
  {
    name: "React Native",
    element: <FaReact size={"100px"} color="rgb(97,218,251)" />,
  },
];

interface TechnologyProps {
  skill: Skill;
}

function Skill({ skill }: React.PropsWithChildren<TechnologyProps>) {
  return (
    <div className="w-[150px] sm:w-[200px] p-1 text-center rounded-md flex flex-col justify-between items-center transition-all duration-200 hover:scale-105 shadow-md shadow-gray-600">
      <div className="h-[100px] w-[100px] flex justify-center items-center">
        {skill.element}
      </div>
      <p>{skill.name}</p>
    </div>
  );
}

function Skills() {
  return (
    <Section
      className="mx-auto w-[80%] flex flex-col justify-center items-center pt-[20px] md:mt-[150px] md:pt-[70px]"
      name="experience"
    >
      <h1 className="font-bold text-2xl border-solid border-b-4 border-b-violet-600">
        Skills
      </h1>
      <p className="mt-2 text-gray-400">
        // these are the technologies I have worked with
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 mt-3">
        {skills.map((skill: Skill, index: number) => {
          return <Skill skill={skill} key={index} />;
        })}
      </div>
    </Section>
  );
}

export default Skills;
