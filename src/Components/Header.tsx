import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import cn from "../utils/cn";
import { motion } from "framer-motion";

const ICONS = [
  {
    link: "https://github.com/sangramabdar/portfolio",
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
        "fixed w-full z-10 flex justify-between items-center px-8 h-10 sm:h-14 top-0 bg-primary-1/50 backdrop-blur-lg"
      )}
    >
      <motion.div className={cn("flex space-x-3 pl-20 gap-2")}>
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
              className="text-tertiary/80"
              href={icon.link}
            >
              {icon.icon}
            </motion.a>
          );
        })}
      </motion.div>
      {/* <div>resume</div> */}
    </motion.header>
  );
}
