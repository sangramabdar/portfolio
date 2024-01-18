import Element from "react-scroll/modules/components/Element";
import { SlLocationPin, SlPhone, SlShare } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import React from "react";
import { IconType } from "react-icons";
import cn from "../utils/cn";
import Reveal from "./Reveal";

const Section = Element;

const contactItems: {
  Icon: IconType;
  children: React.ReactNode;
}[] = [
  {
    Icon: SlLocationPin,
    children: <span className="text-tertiary break-all">Pune</span>,
  },
  {
    Icon: SlPhone,
    children: <span className="text-tertiary break-all">+918600173694</span>,
  },
  {
    Icon: AiOutlineMail,
    children: (
      <a
        className="text-tertiary break-all"
        href="mailto:abdarsangram2697@gmail.com"
      >
        abdarsangram2697@gmail.com
      </a>
    ),
  },
  {
    Icon: SiLinkedin,
    children: (
      <a
        href="https://www.linkedin.com/in/sangram-abdar-522150117/"
        className="text-tertiary break-all"
      >
        https://www.linkedin.com/in/sangram-abdar-522150117
      </a>
    ),
  },
  {
    Icon: SiGithub,
    children: (
      <a
        className="text-tertiary break-all"
        href="https://github.com/sangramabdar"
      >
        https://github.com/sangramabdar
      </a>
    ),
  },
];

function ContactItem({
  Icon,
  children,
}: {
  Icon: any;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex gap-6 items-center underline")}>
      <Icon
        className={cn(
          "min-w-[32px] min-h-[32px] object-cover text-secondary-1"
        )}
      />
      {children}
    </div>
  );
}

function Contact() {
  return (
    <Section
      className={cn(
        "max-w-7xl mx-auto flex flex-col justify-center items-center px-4 sm:px-8 mt-40 text-center space-y-4 py-8 h-screen"
      )}
      name="contact"
    >
      <Reveal>
        <h4
          className={cn(
            "text-4xl sm:text-6xl border-solid text-tertiary font-black"
          )}
        >
          Contact
          <span className={cn("text-secondary-1")}>.</span>
        </h4>
      </Reveal>
      <Reveal>
        <p
          className={cn(
            "border-solid text-tertiary font-extralight sm:text-xl max-w-md mx-auto"
          )}
        >
          Shoot me an email if you want to connect! You can also find me on
          <a className={cn("text-secondary-1")}> Linkedin</a> if that's more
          your speed.
        </p>
      </Reveal>
      <Reveal>
        <a
          className={cn(
            "flex items-center gap-2 text-secondary-1 sm:text-2xl text-xl font-semibold"
          )}
          href="abdarsangram2697@gmail.com"
        >
          <SiGmail />
          <span>abdarsangram2697@gmail.com</span>
        </a>
      </Reveal>
    </Section>
  );
}

export default Contact;
