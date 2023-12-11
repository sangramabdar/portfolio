import Element from "react-scroll/modules/components/Element";
import { SlLocationPin, SlPhone, SlShare } from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";
import { SiLinkedin, SiGithub } from "react-icons/si";
import React from "react";
import { IconType } from "react-icons";

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
    <div className="flex gap-6 items-center underline">
      <Icon className="min-w-[32px] min-h-[32px] object-cover text-secondary-1" />
      {children}
    </div>
  );
}

function Contact() {
  return (
    <Section
      className="max-w-7xl mx-auto flex flex-col justify-start items-center px-4 sm:px-8 mt-40 pb-40 h-screen"
      name="contact"
    >
      <h1 className="font-bold text-2xl border-solid border-b-4 text-tertiary border-b-secondary-1">
        Contact
      </h1>
      <div className="grid overflow-hidden grid-cols-1 gap-12 mt-10">
        {contactItems.map((item: any, index: number) => {
          return <ContactItem key={index} {...item} />;
        })}
      </div>
    </Section>
  );
}

export default Contact;
