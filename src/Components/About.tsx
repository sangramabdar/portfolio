import Element from "react-scroll/modules/components/Element";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Section = Element;

function Information() {
  return (
    <div className="space-y-4">
      <h1>
        Hi, I'm Sangram. I am a postgraduate in computer applications and I
        enjoy problem-solving and coding. I always strive to bring 100% to the
        work I do.
      </h1>

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
    </div>
  );
}

function About() {
  return (
    <Section
      className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-start items-center mt-40"
      name="about"
    >
      <h1 className="font-bold text-2xl border-solid border-b-4 border-b-violet-600">
        About Me
      </h1>

      <div className="flex flex-col justify-center items-center md:flex-row mt-10 gap-4">
        <Information />
        <Logo className="object-conver w-full" />
      </div>
    </Section>
  );
}

export default About;
