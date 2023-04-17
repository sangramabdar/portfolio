import React from "react";
import Element from "react-scroll/modules/components/Element";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { ReactComponent as Logo } from "../assets/logo.svg";
import Contact from "./Contact";

const Section = Element;

function Information() {
  return (
    <div className="p-10 m-auto sm:w-full mt-3 text-xl">
      <section>
        <h1>
          {" "}
          Hi, I'm Sangram. I am a postgraduate in computer applications and I
          enjoy problem-solving and coding. I always strive to bring 100% to the
          work I do.
        </h1>
        {/* 
        <h1 className="mt-2">
          I have practical knowledge of diiferent technologies like React,
          TypeScript, JavaScript, Redux, HTML, CSS.
        </h1> */}
      </section>
      <section className="pt-4 text-xl">
        <p>I have worked on technologies like</p>
        <div className="flex flex-wrap">
          <span className="text-center font-bold border-b-violet-600 border-b-2 mr-2">
            React
          </span>
          <span className="text-center font-bold border-b-violet-600 border-b-2 mr-2">
            Redux
          </span>
          <span className="text-center font-bold border-b-violet-600 border-b-2 mr-2">
            TypeScript
          </span>
          <span className="text-center font-bold border-b-violet-600 border-b-2 mr-2">
            JavaScript
          </span>
          <span className="text-center font-bold border-b-violet-600 border-b-2 mr-2">
            Tailwind CSS
          </span>
          <span className="text-center font-bold border-b-violet-600 border-b-2 mr-2">
            HTML
          </span>
          <span className="text-center font-bold border-b-violet-600 border-b-2 mr-2">
            CSS
          </span>
        </div>
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
      className="m-auto flex flex-col justify-start items-center w-[80%] pt-[20px] md:mt-[100px] md:pt-[70px]"
      name="about"
    >
      <h1 className="font-bold text-2xl border-solid border-b-4 border-b-violet-600">
        About Me
      </h1>
      <div className="flex-col justify-center items-center ite flex md:flex-row">
        <Information />
        <Logo />
      </div>
    </Section>
  );
}

export default About;
