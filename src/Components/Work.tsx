import React from "react";
import Element from "react-scroll/modules/components/Element";
import EcommerceStore from "../assets/Ecommerce_store.png";
import TodoWebApp from "../assets/todo_web_app.png";
import WeatherWebApp from "../assets/weather_app.png";
import EmployeeManagementSystem from "../assets/employee_management_system.png";

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
    deployedLink: "https://ecommerce-store-two-opal.vercel.app/",
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
    <div className="flex flex-col px-4 py-2 space-y-4 w-full h-full justify-evenly object-cover shadow-lg shadow-tertiary/20 rounded-md transition-all duration-200 hover:scale-105">
      <h1 className="text-tertiary/80 font-bold">{name}</h1>
      <img
        className="w-full h-full object-cover rounded-md"
        src={image}
        alt=""
      />
      <div className="flex justify-evenly">
        <a
          className="text-tertiary/80 font-bold hover:text-tertiary"
          href={githubLink}
        >
          Github
        </a>
        <a
          className="text-tertiary/80 font-bold hover:text-tertiary"
          href={deployedLink}
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
      className="max-w-7xl mx-auto flex flex-col items-center justify-center px-4 sm:px-8 mt-40"
      name="work"
    >
      <h1 className="font-bold text-2xl border-solid border-b-4 text-tertiary border-b-secondary-1">
        Work
      </h1>
      <p className="mt-4 text-tertiary/80">
        // check out some of my recent work
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-6 mt-10">
        {projects.map((project: ProjectProps) => {
          return (
            <Project
              key={project.name}
              name={project.name}
              githubLink={project.githubLink}
              deployedLink={project.deployedLink}
              image={project.image}
            />
          );
        })}
      </div>
    </Section>
  );
}

export default Work;
