import React from "react";
import { Link } from "react-scroll";
import cn from "../utils/cn";
import { motion } from "framer-motion";

function NavBarItem({ to, children }: React.PropsWithChildren<{ to: string }>) {
  return (
    <Link
      spy={true}
      activeClass="active"
      className={cn(
        "font-bold text-xl border-solid text-white cursor-pointer opacity-50"
      )}
      to={to}
      smooth={true}
      offset={-100}
      style={{
        writingMode: "vertical-lr",
      }}
    >
      {children}
    </Link>
  );
}

const NAVBAR_OPTIONS = [
  {
    to: "home",
    text: "Home",
  },
  {
    to: "about",
    text: "About me",
  },
  {
    to: "skills",
    text: "Skills",
  },
  {
    to: "work",
    text: "Work",
  },
];

function SideNavBar() {
  return (
    <>
      <motion.nav
        animate={{
          x: 0,
        }}
        initial={{
          x: -50,
        }}
        transition={{
          ease: "easeIn",
          duration: 0.25,
          when: "beforeChildren",
        }}
        className={cn(
          "flex flex-col top-0 bottom-0 fixed left-0 space-y-4 bg-primary-2 py-8 px-4 h-screen z-20"
        )}
      >
        {NAVBAR_OPTIONS.map((option, i) => {
          return (
            <motion.div
              key={i}
              initial={{
                x: -50,
              }}
              animate={{
                x: 0,
              }}
              transition={{
                ease: "easeIn",
                delay: i * 0.1,
              }}
            >
              <NavBarItem to={option.to}>{option.text}</NavBarItem>
            </motion.div>
          );
        })}
      </motion.nav>
    </>
  );
}

export default SideNavBar;
