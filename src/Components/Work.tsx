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
    <div className="flex flex-col h-[250px] w-[250px] justify-evenly object-cover shadow-lg rounded-md transition-all duration-200 hover:scale-110">
      <h1 className="pl-2">{name}</h1>
      <img className="mt-2 h-full rounded-md" src={image} alt="" />
      <section className="mt-3 flex justify-evenly">
        <a href={githubLink}>Github</a>
        <a href={deployedLink}>Demo</a>
      </section>
    </div>
  );
}

function Work() {
  return (
    <Section
      className="h-screen flex justify-center items-start flex-col"
      name="work"
    >
      <h1 className="font-bold text-2xl border-solid border-b-4 border-b-gray-300">
        Work
      </h1>
      <p className="opacity-[0.5] mt-2">
        // these are the technologies I have worked with
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-5 mt-3">
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
