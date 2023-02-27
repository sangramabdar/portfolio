import React from "react";
import Element from "react-scroll/modules/components/Element";

const Section = Element;

function Home() {
  return (
    <Section
      name="home"
      className="h-screen m-auto w-[80%] flex flex-col justify-center items-center"
    >
      <div className="max-w-[400px] md:max-w-[500px] text-xl">
        <p>Hi, my name is</p>
        <h1 className="text-gray-200 text-4xl font-medium md:text-6xl">
          Sangram Abdar
        </h1>
        <h2 className="text-gray-600  text-4xl font-medium md:text-6xl">
          I'm a UI developer
        </h2>
        <p className="pt-4 text-xl">
          I like to work on technologies like
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
              TailwindCSS
            </span>
            <span className="text-center font-bold border-b-violet-600 border-b-2 mr-2">
              HTML
            </span>
            <span className="text-center font-bold border-b-violet-600 border-b-2 mr-2">
              CSS
            </span>
          </div>
        </p>
      </div>
    </Section>
  );
}

export default Home;
