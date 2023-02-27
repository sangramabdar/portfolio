import React, { useRef } from "react";
import Element from "react-scroll/modules/components/Element";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";

const Section = Element;

type Skill = {
  name: string;
  element: React.ReactNode;
};

const skills: Skill[] = [
  {
    name: "React",
    element: <FaReact size={"100px"} color="aqua" />,
  },

  {
    name: "JavaScript",
    element: <SiJavascript color="rgb(247,223,30)" size={"80px"} />,
  },
  {
    name: "TypeScript",
    element: <SiTypescript size={"80px"} color="rgb(49,120,198)" />,
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
    name: "Redux",
    element: <SiRedux size={"80px"} color="rgb(118,74,188)" />,
  },
  {
    name: "Angular",
    element: <FaAngular size={"80px"} color="rgb(221,0,49)" />,
  },
  {
    name: "FireBase",
    element: <SiFirebase size={"80px"} color="rgb(249,141,19)" />,
  },
  {
    name: "React Native",
    element: <FaReact size={"100px"} color="aqua" />,
  },
];

interface TechnologyProps {
  skill: Skill;
}

function Technology({ skill }: React.PropsWithChildren<TechnologyProps>) {
  return (
    <div className="w-[150px] sm:w-[200px] p-1 text-center rounded-md flex flex-col justify-between items-center transition-all duration-200 hover:scale-105 shadow-md shadow-gray-600">
      <div className="h-[100px] w-[100px] flex justify-center items-center">
        {skill.element}
      </div>
      <p>{skill.name}</p>
    </div>
  );
}

function Technologies() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 mt-3">
      {skills.map((skill: Skill, index: number) => {
        return <Technology skill={skill} key={index} />;
      })}
    </div>
  );
}

function Experience() {
  return (
    <Section
      className="m-auto h-screen w-[80%] flex flex-col justify-center items-center mt-20 pt-[200px] md:mt-0 md:pt-0"
      name="experience"
    >
      <h1 className="font-bold text-2xl border-solid border-b-4 border-b-violet-600">
        Experience
      </h1>
      <p className="mt-2 text-gray-400">
        // these are the technologies I have worked with
      </p>
      <Technologies />
    </Section>
  );
}

export default Experience;
