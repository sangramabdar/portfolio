import React from "react";
import Element from "react-scroll/modules/components/Element";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Section = Element;

function Information() {
  return (
    <div className="mt-3 text-xl">
      <section>
        <h1>
          Hi Everyone, I am <span className="font-bold">Sangram Abdar </span>
          from
          <span className="font-bold"> Pune, India</span>.
        </h1>
        <h1 className="mt-2">
          I am really passionate about
          <span className="font-bold"> Front end development.</span>
        </h1>
        <h1 className="mt-2">
          I have good working knowledge of diiferent technologies like ReactJS,
          JavaScript, TypeScript, Redux, HTMl, CSS.
        </h1>
      </section>
      <section className="mt-5">
        <h1>Apart from coding, some other activities that I love to do!</h1>
        <ul>
          <li className="flex pl-3 pt-3 items-center">
            <HiOutlineHandThumbUp />
            <span className="ml-2">Football</span>
          </li>
          <li className="flex pl-3 pt-3 items-center">
            <HiOutlineHandThumbUp />
            <span className="ml-2">Video Games</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

function About() {
  return (
    <Section
      className="mx-auto pt-20 md:h-screen  w-[80%] flex justify-center items-center flex-col"
      name="about"
    >
      <h1 className="font-bold text-2xl border-solid border-b-4 border-b-gray-300">
        About
      </h1>
      <div className="flex-col justify-center items-center ite flex md:flex-row">
        <Information />
        <Logo />
      </div>
    </Section>
  );
}

export default About;
