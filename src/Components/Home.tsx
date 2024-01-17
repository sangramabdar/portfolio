import Element from "react-scroll/modules/components/Element";
import cn from "../utils/cn";

import Typewriter from "typewriter-effect";

import { Variants, motion } from "framer-motion";
import Reveal from "./Reveal";

const Section = Element;

const WORDS = [
  "Software Developer.",
  "React Expert.",
  "JavaScript Enthusiast.",
];

function Home() {
  const varaints: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Section
      name="home"
      className={cn(
        "max-w-4xl mx-auto px-4 h-screen sm:px-8 flex flex-col justify-center items-center text-center"
      )}
    >
      {/* <motion.div
        variants={varaints}
        className={cn("space-y-2 max-w-xl mx-auto")}
      >
        <motion.span
          variants={varaints}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
          transition={{
            delay: 0.2,
          }}
          className={cn("mx-auto text-tertiary/80")}
        >
          Hi, I'm{" "}
        </motion.span>
        <motion.h1
          variants={varaints}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
          transition={{
            delay: 0.4,
          }}
          className={cn("text-4xl font-medium md:text-6xl text-tertiary")}
        >
          Sangram Abdar
        </motion.h1>
        <motion.div
          variants={varaints}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
          transition={{
            delay: 0.6,
          }}
          className={cn(
            "text-2xl pt-4 font-bold md:text-4xl mt-4 text-tertiary/70"
          )}
        >
          <Typewriter
            options={{
              strings: WORDS,
              loop: true,
              autoStart: true,
              deleteSpeed: "natural",
            }}
          />
        </motion.div>

        <motion.p
          variants={varaints}
          initial={"hidden"}
          whileInView={"show"}
          viewport={{ once: true }}
          transition={{
            delay: 0.8,
          }}
          className={cn("pt-8 text-lg text-tertiary/80")}
        >
          "A self-driven, passionate software developer with a curious mind who
          revels in solving complex and challenging real-world problems."
        </motion.p>
      </motion.div> */}
      <div className={cn("space-y-8 max-w-xl mx-auto")}>
        <Reveal>
          <h1 className={cn("text-4xl font-bold md:text-6xl text-tertiary")}>
            Hey, I'm Sangram
            <span className={cn("text-secondary-1")}>.</span>
          </h1>
        </Reveal>
        {/* <Reveal>
          <div
            className={cn(
              "text-2xl pt-4 font-bold md:text-4xl mt-4 text-tertiary/70"
            )}
          >
            <Typewriter
              options={{
                strings: WORDS,
                loop: true,
                autoStart: true,
                deleteSpeed: "natural",
              }}
            />
          </div>
        </Reveal> */}

        <Reveal>
          <h2 className={cn("text-2xl font-bold md:text-4xl text-tertiary")}>
            I'm a{" "}
            <span className={cn("text-secondary-1")}>Full Stack Developer</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className={cn("text-lg text-tertiary/80")}>
            A self-driven, passionate software developer with a curious mind who
            revels in solving complex and challenging real-world problems
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export default Home;
