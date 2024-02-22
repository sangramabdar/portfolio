import Element from "react-scroll/modules/components/Element";
import Reveal from "./Reveal";
import cn from "@/utils/cn";

import { Link } from "react-scroll";

const Section = Element;

function Home() {
  return (
    <Section
      name="home"
      className={cn("relative flex flex-col py-[72px] md:p-24")}
    >
      <div className={cn("space-y-6 md:space-y-8")}>
        <Reveal className={cn("w-fit")}>
          <h1
            className={cn(
              "text-5xl font-black md:text-7xl text-t-primary relative z-10"
            )}
          >
            Hey, I'm Sangram
            <span className={cn("text-secondary")}>.</span>
          </h1>
        </Reveal>

        <Reveal className={cn("w-fit")}>
          <h2
            className={cn(
              "text-2xl font-extralight md:text-4xl text-white relative z-10"
            )}
          >
            I'm a{" "}
            <span className={cn("text-secondary font-bold")}>
              Software Developer.
            </span>
          </h2>
        </Reveal>

        <Reveal className={cn("w-fit")}>
          <p
            className={cn(
              "text-xl md:text-3xl text-left text-t-secondary font-extralight relative z-10"
            )}
          >
            A self-driven, passionate software developer with a curious mind who
            enjoys solving a complex and challenging real-world problems.
          </p>
        </Reveal>

        <Reveal>
          <Link
            spy={true}
            className={cn(
              "font-normal text-primary cursor-pointer py-2 px-4 md:text-xl bg-secondary rounded-md"
            )}
            to={"contact"}
            smooth={true}
            offset={0}
          >
            Contact me
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}

export default Home;
