import Element from "react-scroll/modules/components/Element";
import cn from "../utils/cn";

import Typewriter from "typewriter-effect";

const Section = Element;

const WORDS = [
  "Software Developer.",
  "React Expert.",
  "JavaScript Enthusiast.",
];

function Home() {
  return (
    <Section
      name="home"
      className={cn(
        "max-w-4xl mx-auto px-4 h-screen sm:px-8 flex flex-col justify-center items-center text-center"
      )}
    >
      <div
        className={cn(
          "space-y-2 max-w-xl mx-auto",
          "animate__animated animate__fadeInUp"
        )}
      >
        <span className={cn("mx-auto text-tertiary/80")}>Hi, I'm </span>
        <h1 className={cn("text-4xl font-medium md:text-6xl text-tertiary")}>
          Sangram Abdar
        </h1>
        <div
          className={cn(
            "text-2xl pt-4 font-bold md:text-4xl mt-4 text-tertiary/70"
          )}
        >
          <Typewriter
            options={{
              strings: WORDS,
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <p className={cn("pt-8 text-lg text-tertiary/80")}>
          "A self-driven, passionate software developer with a curious mind who
          revels in solving complex and challenging real-world problems."
        </p>
      </div>
    </Section>
  );
}

export default Home;
