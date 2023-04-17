import React, { useEffect, useMemo, useRef, useState } from "react";
import Element from "react-scroll/modules/components/Element";

const Section = Element;

const words = ["Software Developer.", "Programmer.", "JavaScript enthusiast."];

let currentIndex = 0;
let pointer = 0;
let task = "add";

const fn = (ref: any) => {
  if (task == "add") {
    if (pointer < words[currentIndex].length) {
      ref.current.innerHTML = words[currentIndex].substring(0, pointer);
      pointer++;
    } else {
      task = "remove";
    }
  } else {
    if (pointer >= 0) {
      ref.current.innerHTML = words[currentIndex].substring(0, pointer);
      pointer--;
    } else {
      task = "add";
      pointer = 0;
      currentIndex += 1;

      if (currentIndex === words.length) {
        currentIndex = 0;
      }
    }
  }
};

function Home() {
  const ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => fn(ref), 150);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Section
      name="home"
      className="mx-auto h-screen w-[80%] flex flex-col justify-center md:pt-0 md:justify-center items-center text-center"
    >
      <div className="max-w-[400px] md:max-w-[500px] text-xl">
        <p>Hi, my name is</p>
        <h1 className="text-gray-200 text-4xl font-medium md:text-6xl">
          Sangram Abdar
        </h1>
        <h2 className="text-gray-600 text-2xl font-medium md:text-4xl mt-4">
          I'm a{" "}
          <span
            className="font-bold border-b-violet-600 border-b-2 mr-2"
            ref={ref}
          ></span>
        </h2>

        <p className="mt-3">
          A Self-driven, passionate programmer with a curious mind who enjoys
          solving complex and challenging real-world problems.
        </p>
      </div>
    </Section>
  );
}

export default Home;
