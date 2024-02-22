import cn from "@/utils/cn";
import React from "react";
import Element from "react-scroll/modules/components/Element";
import Reveal from "./Reveal";
import { SiGmail } from "react-icons/si";

const Section = Element;

function Contact() {
  return (
    <Section
      name="contact"
      id="contact"
      className={cn(
        "mt-20 md:mt-0 flex flex-col pb-20 md:p-24 relative w-full text-center"
      )}
    >
      <div
        className={cn(
          "space-y-4 md:space-y-6 flex flex-col justify-center items-center"
        )}
      >
        <Reveal className={cn("w-fit")}>
          <h1
            className={cn(
              "text-5xl font-black md:text-7xl text-t-primary relative z-10"
            )}
          >
            Contact
            <span className={cn("text-secondary")}>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <p className="font-extralight text-lg md:text-xl">
            Shoot me an email if you want to connect!
          </p>
        </Reveal>

        <Reveal>
          <a
            href="mailto:abdarsangram2697@gmail.com"
            className="flex gap-2 justify-center items-center"
          >
            <SiGmail />
            <span className="font-normal break-words">
              abdarsangram2697@gmail.com
            </span>
          </a>
        </Reveal>
      </div>
    </Section>
  );
}

export default Contact;
