import React from "react";
import Element from "react-scroll/modules/components/Element";

const Section = Element;

function Home() {
  return (
    <Section
      name="home"
      className="h-screen w-[80%] flex flex-col justify-center items-center"
    >
      <div className="max-w-[300px] md:max-w-[500px]">
        <p>Hi, my name is</p>
        <h1 className="text-gray-200 text-4xl font-medium md:text-6xl">
          Sangram Abdar
        </h1>
        <h2 className="text-gray-800  text-4xl font-medium md:text-6xl">
          I'm a Front End Developer
        </h2>
        <p className="pt-4">
          I'm a front-end developer specializing in building user interfaces in
          ReactJS
        </p>
      </div>
    </Section>
  );
}

export default Home;
