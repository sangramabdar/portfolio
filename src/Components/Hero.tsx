"use client";

import Element from "react-scroll/modules/components/Element";
import Reveal from "./Reveal";
import cn from "@/utils/cn";

import { Link } from "react-scroll";
import Button from "./Button";

const Section = Element;

function Hero() {
  return (
    <Section
      name="home"
      className={cn("relative flex flex-col py-[72px] md:p-24")}
    >
      <div className={cn("space-y-6")}>
        <Reveal className={cn("w-fit")}>
          <h2
            className={cn(
              "text-2xl font-extralight md:text-4xl text-white relative z-10"
            )}
          >
            I'm a{" "}
            <span className={cn("text-secondary font-bold")}>
              Software Engineer.
            </span>
          </h2>
        </Reveal>
        <Reveal className={cn("w-fit")}>
          <h1
            className={cn(
              "text-5xl font-black md:text-6xl text-t-primary relative z-10 leading-[60px] md:leading-[80px]"
            )}
          >
            {/* Hey, I'm Sangram */}
            Carrying <span className={cn("text-secondary")}>your ideas </span>
            to their <span className={cn("text-secondary")}>destination</span>
            <span className={cn("text-secondary")}>.</span>
          </h1>
        </Reveal>

        {/* <Reveal className={cn("w-fit")}>
          <h2
            className={cn(
              "text-2xl font-extralight md:text-4xl text-white relative z-10"
            )}
          >
            I'm a{" "}
            <span className={cn("text-secondary font-bold")}>
              Software Engineer.
            </span>
          </h2>
        </Reveal> */}

        <Reveal className={cn("w-fit")}>
          <p
            className={cn(
              "text-xl md:text-3xl text-left text-t-secondary font-extralight relative z-10"
            )}
          >
            A passionate software engineer with a curious mind who enjoys
            solving complex and challenging real-world problems.
          </p>
        </Reveal>

        <Reveal>
          <Link spy={true} to={"about"} smooth={true} offset={0}>
            <Button className="hover:scale-105 transition-all mt-4">
              About
            </Button>
          </Link>
        </Reveal>
      </div>
    </Section>
  );
}

export default Hero;
