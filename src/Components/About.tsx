import React from "react";
import Element from "react-scroll/modules/components/Element";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Section = Element;

function Information() {
  return (
    <div className="p-10 m-auto sm:w-full mt-3 text-xl">
      <section>
        <h1>
          Hi Everyone, I am <span className="font-bold">Sangram Abdar </span>
          from
          <span className="font-bold"> Pune, India</span>.
        </h1>
        <h1 className="mt-2">
          I am really passionate about
          <span className="font-bold"> UI development.</span>
        </h1>
        <h1 className="mt-2">
          I have good working knowledge of diiferent technologies like React,
          TypeScript, JavaScript, Redux, HTML, CSS.
        </h1>
      </section>
      <section className="mt-5">
        <h1>Apart from coding, some other activities that I love to do!</h1>
        <ul>
          <li className="flex pl-3 pt-3 items-center">
            <HiOutlineHandThumbUp />
            <span className="ml-2">Playing football</span>
          </li>
          <li className="flex pl-3 pt-3 items-center">
            <HiOutlineHandThumbUp />
            <span className="ml-2">Playing video games</span>
          </li>
        </ul>
      </section>
    </div>
  );
}

function About() {
  return (
    <Section
      className="mx-auto md:h-screen  w-[80%] flex justify-center items-center flex-col mt-[100px] md:mt-0 pt-14 md:pt-[110px]"
      name="about"
    >
      <h1 className="font-bold text-2xl border-solid border-b-4 border-b-violet-600">
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
