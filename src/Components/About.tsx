import Element from "react-scroll/modules/components/Element";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Section = Element;

function Information() {
  return (
    <div className="space-y-4 text-secondary-2">
      <h1>
        I completed my post graduation in MCA (computer applications) and I
        enjoy problem-solving and coding. I always strive to bring 100% to the
        work I do.
      </h1>

      <div className="flex flex-wrap">
        <span className="block w-full">I have worked on technologies like</span>
        <span className="text-center font-bold border-b-secondary-1 border-b-2 mr-2">
          React
        </span>
        <span className="text-center font-bold border-b-secondary-1 border-b-2 mr-2">
          Redux
        </span>
        <span className="text-center font-bold border-b-secondary-1 border-b-2 mr-2">
          TypeScript
        </span>
        <span className="text-center font-bold border-b-secondary-1 border-b-2 mr-2">
          JavaScript
        </span>
        <span className="text-center font-bold border-b-secondary-1 border-b-2 mr-2">
          Tailwind CSS
        </span>
        <span className="text-center font-bold border-b-secondary-1 border-b-2 mr-2">
          HTML
        </span>
        <span className="text-center font-bold border-b-secondary-1 border-b-2 mr-2">
          CSS .
        </span>
      </div>

      <h1>Apart from coding, some other activities that I love to do!</h1>
      <ul className="space-y-2">
        <li className="flex items-center">
          <HiOutlineHandThumbUp />
          <span className="ml-2">Playing football</span>
        </li>
        <li className="flex  items-center">
          <HiOutlineHandThumbUp />
          <span className="ml-2">Playing video games</span>
        </li>
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
      <h1 className="font-bold text-2xl border-solid border-b-4 text-tertiary border-b-secondary-1">
        About Me
      </h1>

      <div className="max-w-xl mx-auto mt-10 gap-4">
        <Information />
      </div>
    </Section>
  );
}

export default About;
