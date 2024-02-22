"use client";

import React from "react";
import Element from "react-scroll/modules/components/Element";
import EcommerceStore from "../assets/Ecommerce_store.png";
import TodoWebApp from "../assets/todo_web_app.png";
import WeatherWebApp from "../assets/weather_app.png";
import EmployeeManagementSystem from "../assets/employee_management_system.png";
import Reveal from "./Reveal";
import cn from "@/utils/cn";
import Image from "next/image";

const Section = Element;

interface ProjectProps {
  name: string;
  githubLink: string;
  deployedLink: string;
  // image: string;
}

const projects: ProjectProps[] = [
  {
    name: "Ecommerce Store",
    githubLink: "https://github.com/sangramabdar/Ecommerce-store",
    deployedLink: "https://ecommerce-store-five-pi.vercel.app/",
    // image: EcommerceStore,
  },
  {
    name: "Real-Time weather app",
    githubLink: "https://github.com/sangramabdar/weather-app",
    deployedLink: "https://sangramabdar.github.io/weathe-app-deploy/",
    // image: WeatherWebApp,
  },
  {
    name: "Todo Web Application",
    githubLink: "https://github.com/sangramabdar/todo-application",
    deployedLink: "https://todo-application-omega.vercel.app/",
    // image: TodoWebApp,
  },
  {
    name: "Employee Management System",
    githubLink: "https://github.com/sangramabdar/employee_management_system",
    deployedLink: "https://employee-management-system-mpgi.vercel.app/",
    // image: EmployeeManagementSystem,
  },
];

function Project({
  name,
  githubLink,
  deployedLink,
}: React.PropsWithChildren<ProjectProps>) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-2 w-full h-full justify-start object-cover rounded-lg transition-all duration-200 group hover:scale-105 hover:ring-secondary/80"
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
        <div className="text-secondary font-normal">React - Node.js</div>
        <p className="text-t-secondary text-lg font-extralight">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          assumenda officia voluptatem in repellendus ut velit molestiae esse,
          harum quia accusantium mollitia et ad ipsa libero perferendis quidem
          omnis modi.
        </p>
        <div className={cn("flex gap-4 mt-2")}>
          <a
            className={cn(
              "font-normal text-secondary ring-1 ring-secondary/80 p-1 rounded-md px-4 py-2 hover:bg-secondary/80 hover:text-tertiary"
            )}
            href={githubLink}
          >
            Github
          </a>
          <a
            href={deployedLink}
            className={cn(
              "font-normal bg-secondary p-1 rounded-md px-4 py-2 text-black/80 hover:bg-secondary/80 hover:text-tertiary"
            )}
          >
            Demo
          </a>
        </div>
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
          "grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-8 mt-10"
        )}
      >
        {projects.map((project: ProjectProps) => {
          return (
            <Reveal key={project.name}>
              <Project
                name={project.name}
                githubLink={project.githubLink}
                deployedLink={project.deployedLink}
                // image={project.image}
              />
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export default Projects;
