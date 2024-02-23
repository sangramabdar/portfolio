"use client";

import React from "react";
import Element from "react-scroll/modules/components/Element";
import Reveal from "./Reveal";
import cn from "@/utils/cn";

const Section = Element;

interface ProjectProps {
  name: string;
  githubLink: string;
  deployedLink: string;
  description: string;
  techonogies: string;
}

const projects: ProjectProps[] = [
  {
    name: "Ecommerce Store",
    githubLink: "https://github.com/sangramabdar/Ecommerce-store",
    deployedLink: "https://ecommerce-store-five-pi.vercel.app/",
    description: `Includes features such as displaying detailed product information, facilitating the addition of
products to the cart, and enabling secure order placement.`,
    techonogies: "React - Nodejs - ReactQuery - MongoDB - Express",
  },
  {
    name: "Real-Time weather app",
    githubLink: "https://github.com/sangramabdar/weather-app",
    deployedLink: "https://sangramabdar.github.io/weathe-app-deploy/",
    description: `Provides real-time updates for cities worldwide. Key functionalities include the flexibility to
customize the view of weather data in various units.`,
    techonogies: "React - TailwinCSS - HTML - CSS",
  },
  {
    name: "Todo Web Application",
    githubLink: "https://github.com/sangramabdar/todo-application",
    deployedLink: "https://todo-application-omega.vercel.app/",
    description: `Serves as a comprehensive solution for organizing tasks with a strong emphasis on data
protection through the use of JSON Web Tokens (JWT) for security.`,
    techonogies: "React - Nodejs - MongoDB - Express",
  },
  {
    name: "Employee Management System",
    githubLink: "https://github.com/sangramabdar/employee_management_system",
    deployedLink: "https://employee-management-system-mpgi.vercel.app/",
    description: `Provides a comprehensive solution for organizing employee information with a strong emphasis on data protection, utilizing JSON Web Tokens (JWT) for enhanced security measures.`,
    techonogies: "React - Nodejs - MongoDB - Express",
  },
];

function Project({
  name,
  githubLink,
  deployedLink,
  description,
  techonogies,
}: React.PropsWithChildren<ProjectProps>) {
  return (
    <div
      className={cn(
        "flex flex-col w-full h-full justify-between object-cover rounded-lg transition-all duration-200 group hover:scale-105 hover:ring-secondary/80"
      )}
    >
      <div className="bg-[#232323] px-8 pt-12 rounded-md overflow-hidden">
        <img
          className={cn(
            "w-full h-full object-cover object-center rounded-md translate-y-3 group-hover:rotate-3 transition-all"
          )}
          src={"/example-project.jpg"}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className={cn("text-t-primary text-xl font-bold")}>{name}</h1>
        <div className="text-secondary font-normal">{techonogies}</div>
        <p className="text-t-secondary text-lg font-extralight">
          {description}
        </p>
      </div>
      <div className={cn("flex gap-4 mt-2")}>
        <a
          className={cn(
            "font-normal text-secondary ring-1 ring-secondary/80 p-1 rounded-md px-4 py-2 hover:bg-secondary hover:text-primary"
          )}
          href={githubLink}
        >
          Github
        </a>
        <a
          href={deployedLink}
          className={cn(
            "font-normal bg-secondary p-1 rounded-md px-4 py-2 text-black/80 hover:bg-primary hover:text-secondary hover:ring-1 hover:ring-secondary"
          )}
        >
          Demo
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <Section
      className={cn("flex flex-col py-[72px] pb-20 md:p-24")}
      name="projects"
    >
      <Reveal>
        <h1 className={cn("font-black text-3xl md:text-4xl text-t-primary")}>
          Projects
          <span className="text-secondary">.</span>
        </h1>
      </Reveal>

      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-16 md:gap-12 mt-10"
        )}
      >
        {projects.map((project: ProjectProps) => {
          return (
            <Reveal key={project.name}>
              <Project {...project} />
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export default Projects;
