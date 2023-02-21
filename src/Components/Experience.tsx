import React, { useRef } from "react";
import Element from "react-scroll/modules/components/Element";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";

const Section = Element;

const skills = [
  {
    name: "ReactJS",
    element: <FaReact size={"100px"} color="aqua" />,
    id: 7,
  },

  {
    name: "JavaScript",
    element: <SiJavascript color="rgb(247,223,30)" size={"80px"} />,
    id: 1,
  },
  {
    name: "TypeScript",
    element: <SiTypescript size={"80px"} color="rgb(49,120,198)" />,
    id: 2,
  },
  {
    name: "HTML",
    element: <AiFillHtml5 size={"100px"} color="orange" />,
    id: 3,
  },
  {
    name: "CSS",
    element: <FaCss3Alt size={"100px"} color="rgb(0,145,213)" />,
    id: 4,
  },
  {
    name: "Redux",
    element: <SiRedux size={"80px"} color="rgb(118,74,188)" />,
    id: 5,
  },
];

function TechnologyContainer() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-4 mt-3">
      {skills.map((skill: any) => {
        return (
          <div
            key={skill.id}
            className="w-[150px] sm:w-[200px] p-2 text-center rounded-md flex flex-col justify-between items-center transition-all duration-200 hover:scale-110 shadow-md shadow-gray-600"
          >
            <div className="h-[100px] w-[100px] flex justify-center items-center">
              {skill.element}
            </div>
            <p>{skill.name}</p>
          </div>
        );
      })}
    </div>
  );
}

function Experience() {
  return (
    <Section
      className="m-auto h-screen w-[80%] flex flex-col justify-center items-center"
      name="experience"
    >
      <h1 className="font-bold text-2xl border-solid border-b-4 border-b-gray-300">
        Experience
      </h1>
      <p className="mt-2 text-gray-400">
        // these are the technologies I have worked with
      </p>
      <TechnologyContainer />
    </Section>
  );
}

export default Experience;
