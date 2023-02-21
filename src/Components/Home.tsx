import React from "react";
import Element from "react-scroll/modules/components/Element";

const Section = Element;

function Home() {
  return (
    <Section
      name="home"
      className="h-screen w-[80%] flex flex-col justify-center items-center"
    >
      <div className="max-w-[400px] md:max-w-[500px]">
        <p>Hi, my name is</p>
        <h1 className="text-gray-200 text-4xl font-medium md:text-5xl">
          Sangram Abdar
        </h1>
        <h2 className="text-gray-600  text-4xl font-medium md:text-5xl">
          I'm a Front End Developer
        </h2>
        <p className="pt-4 text-xl">
          I love to work on web applications using technologies like ReactJS,
          Tailwind, Redux, JavaScript, TypeScript.
        </p>
      </div>
    </Section>
  );
}

export default Home;
