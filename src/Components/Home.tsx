import { useEffect, useRef } from "react";
import Element from "react-scroll/modules/components/Element";

const Section = Element;

const words = [
  "Software Developer.",
  "React Expert.",
  "JavaScript enthusiast.",
];

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
      className="max-w-4xl mx-auto px-4 h-screen sm:px-8 flex flex-col justify-center items-center text-center"
    >
      <div className="space-y-2 max-w-xl mx-auto">
        <span className="mx-auto text-tertiary/60">Hi, My name is</span>
        <h1 className=" text-4xl font-medium md:text-6xl text-tertiary">
          Sangram Abdar
        </h1>
        <h2 className="text-2xl pt-4 font-bold md:text-4xl mt-4 text-secondary-2 opacity-40">
          I'm a{" "}
          <span
            className="font-bold  border-b-2 mr-2 border-b-secondary-1"
            ref={ref}
          ></span>
        </h2>

        <p className="pt-8 text-lg text-tertiary/60">
          A Self-driven, passionate programmer with a curious mind who enjoys
          solving complex and challenging real-world problems.
        </p>
      </div>
    </Section>
  );
}

export default Home;
