import Element from "react-scroll/modules/components/Element";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import cn from "../utils/cn";
import Reveal from "./Reveal";

const Section = Element;

function Information() {
  return (
    <div className={cn("space-y-4 text-tertiary/80")}>
      <Reveal>
        <span>
          Hello! I'm Sangram Abdar from Pune. I hold a postgraduate degree in
          MCA (Computer Applications) and find joy in problem-solving through
          coding. I consistently aim to deliver my best, giving 100% to every
          task."
        </span>
      </Reveal>

      <Reveal>
        <span>
          I possess a strong understanding of a diverse range of technologies
          related to full-stack development, from concept to implementation.
        </span>
      </Reveal>

      {/* <div className={cn("flex flex-wrap")}>
        <span className={cn("block w-full")}>
          I possess a strong understanding of a diverse range of technologies
          like
        </span>
        <span
          className={cn(
            "text-center font-bold border-b-secondary-1 border-b-2 mr-2"
          )}
        >
          React
        </span>
        <span
          className={cn(
            "text-center font-bold border-b-secondary-1 border-b-2 mr-2"
          )}
        >
          Redux
        </span>
        <span
          className={cn(
            "text-center font-bold border-b-secondary-1 border-b-2 mr-2"
          )}
        >
          TypeScript
        </span>
        <span
          className={cn(
            "text-center font-bold border-b-secondary-1 border-b-2 mr-2"
          )}
        >
          JavaScript
        </span>
        <span
          className={cn(
            "text-center font-bold border-b-secondary-1 border-b-2 mr-2"
          )}
        >
          Tailwind CSS
        </span>
        <span
          className={cn(
            "text-center font-bold border-b-secondary-1 border-b-2 mr-2"
          )}
        >
          HTML
        </span>
        <span
          className={cn(
            "text-center font-bold border-b-secondary-1 border-b-2 mr-2"
          )}
        >
          CSS .
        </span>
      </div> */}

      <Reveal>
        <h1>Apart from coding, some other activities that I love to do!</h1>
      </Reveal>

      <ul className={cn("space-y-2")}>
        <Reveal>
          <li className={cn("flex items-center space-x-4")}>
            <HiOutlineHandThumbUp className={cn("text-secondary-1")} />
            <span className={cn("ml-2")}>Playing football</span>
          </li>
        </Reveal>
        <Reveal>
          <li className={cn("flex items-center space-x-4")}>
            <HiOutlineHandThumbUp className={cn("text-secondary-1")} />
            <span className={cn("ml-2")}>Playing video games</span>
          </li>
        </Reveal>
      </ul>
    </div>
  );
}

function About() {
  return (
    <Section
      className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-start items-center mt-40"
      name="about"
    >
      <Reveal>
        <h1 className="font-bold text-2xl border-solid text-tertiary border-b-4 border-b-secondary-1">
          About Me
        </h1>
      </Reveal>

      <div className="max-w-xl mx-auto mt-10 gap-4">
        <Information />
      </div>
    </Section>
  );
}

export default About;
