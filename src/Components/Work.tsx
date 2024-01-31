import React from "react";
import Element from "react-scroll/modules/components/Element";
import EcommerceStore from "../assets/Ecommerce_store.png";
import TodoWebApp from "../assets/todo_web_app.png";
import WeatherWebApp from "../assets/weather_app.png";
import EmployeeManagementSystem from "../assets/employee_management_system.png";
import cn from "../utils/cn";
import Reveal from "./Reveal";

const Section = Element;

interface ProjectProps {
  name: string;
  githubLink: string;
  deployedLink: string;
  image: string;
}

const projects: ProjectProps[] = [
  {
    name: "Ecommerce Store",
    githubLink: "https://github.com/sangramabdar/Ecommerce-store",
    deployedLink: "https://ecommerce-store-five-pi.vercel.app/",
    image: EcommerceStore,
  },
  {
    name: "Real-Time weather app",
    githubLink: "https://github.com/sangramabdar/weather-app",
    deployedLink: "https://sangramabdar.github.io/weathe-app-deploy/",
    image: WeatherWebApp,
  },
  {
    name: "Todo Web Application",
    githubLink: "https://github.com/sangramabdar/todo-application",
    deployedLink: "https://todo-application-omega.vercel.app/",
    image: TodoWebApp,
  },
  {
    name: "Employee Management System",
    githubLink: "https://github.com/sangramabdar/employee_management_system",
    deployedLink: "https://employee-management-system-mpgi.vercel.app/",
    image: EmployeeManagementSystem,
  },
];

function Project({
  name,
  githubLink,
  deployedLink,
  image,
}: React.PropsWithChildren<ProjectProps>) {
  return (
    <div
      className={cn(
        "flex flex-col px-4 py-4 space-y-4 w-full h-full justify-evenly object-cover shadow-tertiary/10 shadow-md rounded-md transition-all duration-200 hover:scale-105 border-secondary"
      )}
    >
      <h1 className={cn("text-white font-bold")}>{name}</h1>
      <img
        className={cn("w-full h-full object-cover rounded-md")}
        src={image}
        alt=""
      />
      <div className={cn("flex justify-evenly")}>
        <a
          className={cn(
            "font-bold bg-secondary p-1 rounded-md px-2 text-black/80 hover:bg-secondary/80 hover:text-white"
          )}
          href={githubLink}
        >
          Github
        </a>
        <a
          href={deployedLink}
          className={cn(
            "font-bold bg-secondary p-1 rounded-md px-2 text-black/80 hover:bg-secondary/80 hover:text-tertiary"
          )}
        >
          Demo
        </a>
      </div>
    </div>
  );
}

function Work() {
  return (
    <Section
      className={cn(
        "max-w-4xl mx-auto flex flex-col items-center justify-center px-4 sm:px-8 mt-40 pb-20"
      )}
      name="work"
    >
      <Reveal>
        <h1
          className={cn(
            "font-bold text-2xl border-solid border-b-4 text-white border-b-secondary"
          )}
        >
          Work
        </h1>
      </Reveal>
      <Reveal>
        <p className={cn("mt-4 text-tertiary/80")}>
          // check out some of my recent work
        </p>
      </Reveal>
      <div
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-8 mt-10"
        )}
      >
        {projects.map((project: ProjectProps) => {
          return (
            <Reveal key={project.name}>
              <Project
                name={project.name}
                githubLink={project.githubLink}
                deployedLink={project.deployedLink}
                image={project.image}
              />
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export default Work;
