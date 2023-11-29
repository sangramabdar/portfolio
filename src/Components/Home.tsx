import { useEffect, useRef } from "react";
import Element from "react-scroll/modules/components/Element";

const Section = Element;

const words = [
  "Software Developer.",
  "React Expert.",
  "JavaScript Enthusiast.",
];

let currentIndex = 0;
let pointer = 0;
let task = "add";

const animation = (ref: any) => {
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
    const interval = setInterval(() => animation(ref), 150);

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
        <span className="mx-auto text-tertiary/60">Hi, I'm </span>
        <h1 className=" text-4xl font-medium md:text-6xl text-tertiary">
          Sangram Abdar
        </h1>
        <div className="text-2xl pt-4 font-bold md:text-4xl mt-4 text-tertiary opacity-40">
          <span className="m-2">A</span>
          <span className="font-bold bg-secondary-1/50" ref={ref}></span>
          <span className="animate-ping duration-100">|</span>
        </div>

        <p className="pt-8 text-lg text-tertiary/60">
          "A self-driven, passionate software developer with a curious mind who
          revels in solving complex and challenging real-world problems."
        </p>
      </div>
    </Section>
  );
}

export default Home;
