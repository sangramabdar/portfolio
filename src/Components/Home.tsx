import Element from "react-scroll/modules/components/Element";
import cn from "../utils/cn";
import Reveal from "./Reveal";

const Section = Element;

function Home() {
  return (
    <Section
      name="home"
      className={cn(
        "max-w-4xl mx-auto px-4 sm:px-8 flex flex-col justify-center items-center md:h-screen pt-20 md:pt-0"
      )}
    >
      <div className={cn("space-y-8 max-w-xl mx-auto")}>
        <Reveal className={cn("w-fit")}>
          <h1 className={cn("text-4xl  font-bold md:text-6xl text-tertiary")}>
            Hey, I'm Sangram
            <span className={cn("text-secondary-1")}>.</span>
          </h1>
        </Reveal>

        <Reveal className={cn("w-fit")}>
          <h2 className={cn("text-2xl font-bold md:text-4xl text-tertiary")}>
            I'm a{" "}
            <span className={cn("text-secondary-1")}>Software Developer</span>
          </h2>
        </Reveal>

        <Reveal className={cn("w-fit")}>
          <p className={cn("text-2xl text-left text-tertiary/60")}>
            A self-driven, passionate software developer with a curious mind who
            revels in solving complex and challenging real-world problems.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export default Home;
