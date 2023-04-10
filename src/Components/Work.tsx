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
    <div className="flex flex-col h-[200px] w-[200px] justify-evenly object-cover shadow-md shadow-gray-600 rounded-md transition-all duration-200 hover:scale-105">
      <h1 className="pl-2">{name}</h1>
      <img className="mt-2 h-full rounded-md" src={image} alt="" />
      <section className="mt-3 flex justify-evenly mb-2">
        <a href={githubLink}>Github</a>
        <a href={deployedLink}>Demo</a>
      </section>
    </div>
  );
}

function Work() {
  return (
    <Section
      className="m-auto flex flex-col items-center justify-center mt-[100px] p-[20px] md:mt-[150px] md:pt-[70px]"
      name="work"
    >
      <h1 className="font-bold text-2xl border-solid border-b-4 border-b-violet-600 mt-0">
        Work
      </h1>
      <p className="mt-2 text-gray-400">// check out some of my recent work</p>
      <div className="grid m-auto grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-5 mt-3">
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
