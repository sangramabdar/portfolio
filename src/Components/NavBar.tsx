"use client";

import React, { useEffect, useState } from "react";
import { Events, Link } from "react-scroll";

import { motion } from "framer-motion";
import cn from "@/utils/cn";

function NavBarItem({
  to,
  children,
  activeLink,
}: React.PropsWithChildren<{
  to: string;

  activeLink: string;
}>) {
  return (
    <Link
      spy={true}
      className={cn(
        "font-extralight text-white cursor-pointer opacity-50 py-2 px-4 md:text-xl",
        activeLink === to && "border-r w-full border-secondary opacity-100"
      )}
      to={to}
      smooth={true}
      offset={0}
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
    to: "projects",
    text: "Projects",
  },
  {
    to: "contact",
    text: "Contact",
  },
];

function SideNavBar() {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    Events.scrollEvent.register("end", (to, element) => {
      setActiveLink(to);
    });
  }, []);

  return (
    <motion.nav
      layout
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
        "flex flex-col top-0 bottom-0 fixed left-0 space-y-2 md:space-y-4 bg-black py-16 h-screen z-20"
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
            <NavBarItem activeLink={activeLink} to={option.to}>
              {option.text}
            </NavBarItem>
          </motion.div>
        );
      })}
    </motion.nav>
  );
}

export default SideNavBar;
