"use client";

import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";
import { FaPhoneAlt } from "react-icons/fa";
import cn from "@/utils/cn";

const ICONS = [
  {
    link: "https://github.com/sangramabdar",
    icon: <SiGithub />,
  },
  {
    link: "https://www.linkedin.com/in/sangram-abdar-522150117/",
    icon: <SiLinkedin />,
  },
  {
    link: "mailto:abdarsangram2697@gmail.com",
    icon: <SiGmail />,
  },
  {
    link: "tel:+918600173694",
    icon: <FaPhoneAlt />,
  },
];

export default function Header() {
  return (
    <motion.header
      animate={{
        y: 0,
      }}
      initial={{
        y: -50,
      }}
      transition={{
        ease: "easeIn",
        duration: 0.25,
        when: "beforeChildren",
      }}
      className={cn(
        "fixed w-full z-30 flex justify-between items-center px-4 sm:h-14 top-0 bg-primary-1/50 backdrop-blur-lg py-2"
      )}
    >
      <motion.div className={cn("flex gap-6")}>
        {ICONS.map((icon, i) => {
          return (
            <motion.a
              key={i}
              initial={{
                y: -50,
              }}
              animate={{
                y: 0,
              }}
              transition={{
                ease: "easeIn",
                delay: i * 0.2,
              }}
              className="text-tertiary/80 hover:text-secondary"
              href={icon.link}
            >
              {icon.icon}
            </motion.a>
          );
        })}
      </motion.div>

      {/* <motion.a
        initial={{
          y: -50,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          ease: "easeIn",
        }}
        className=" rounded-md font-normal text-sm md:text-base px-4 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-primary active:ring-white active:ring-offset-gray-200"
        href="/Sangram's_Resume.pdf"
        download="Sangram's_resume"
      >
        Download CV
      </motion.a> */}
    </motion.header>
  );
}
