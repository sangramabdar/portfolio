import React from "react";
import Element from "react-scroll/modules/components/Element";

const Section = Element;

function Home() {
  return (
    <Section
      name="home"
      className="h-screen w-screen flex flex-col justify-center items-center"
    >
      <div className="max-w-[300px] md:max-w-[500px]">
        <p>Hi, my name is</p>
        <h1 className="text-gray-800 text-3xl font-medium md:text-5xl">
          Sangram Abdar
        </h1>
        <h2 className="text-gray-200 text-3xl font-medium md:text-5xl">
          I'm a Front End Developer
        </h2>
        <p className="pt-4s">
          I'm a front-end developer specializing in building user interfaces in
          ReactJS
        </p>
      </div>
    </Section>
  );
}

/*
Hi Everyone, I am Soumyajit Behera from Bhubaneswar, India.
I am a junior pursuing IMSC in Maths and Computing in BIT Mesra.

Apart from coding, some other activities that I love to do!

Playing Games
Writting Tech Blogs
Travelling*/

export default Home;
