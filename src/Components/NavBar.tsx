import React from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useNavBarContext } from "../context/NavBarContext";
import cn from "../utils/cn";
import { motion } from "framer-motion";

function SideNavBarItem({
  children,
  to,
}: React.PropsWithChildren<{ to: string }>) {
  const { toggleSideDrawer } = useNavBarContext();

  return (
    <Link
      spy={true}
      activeClass="active"
      onClick={toggleSideDrawer}
      className={cn(
        "text-tertiary font-bold w-fit text-xl border-solid border-b-4 border-b-secondary opacity-[0.5]"
      )}
      to={to}
      smooth={true}
      offset={-80}
    >
      {children}
    </Link>
  );
}

function SideDrawer() {
  const { toggleSideDrawer, open } = useNavBarContext();

  const handleOnClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    toggleSideDrawer();
  };

  return (
    <ul
      className={cn(
        "fixed bg-primary-2/10 backdrop-blur-lg h-screen w-full flex right-0 top-0 transition-all duration-900 flex-col justify-start pt-20 space-y-8 px-4 md:hidden ",
        open ? "translate-x-[0px]" : "translate-x-[100%]"
      )}
      onClick={handleOnClick}
    >
      <SideNavBarItem to="home">Home</SideNavBarItem>
      <SideNavBarItem to="about">About Me</SideNavBarItem>
      <SideNavBarItem to="skills">Skills</SideNavBarItem>
      <SideNavBarItem to="work">Work</SideNavBarItem>
      <SideNavBarItem to="contact">Contact</SideNavBarItem>
    </ul>
  );
}

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
  // {
  //   to: "contact",
  //   text: "Contact",
  // },
];

function NavBar() {
  const { toggleSideDrawer, open } = useNavBarContext();

  const handleOnClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    toggleSideDrawer();
  };

  return (
    <>
      {/* for small screen */}
      <nav
        className={cn(
          "top-0 right-0 left-0 fixed p-4 px-4 md:px-8 z-20 text-black bg-primary-2/40 hidden"
        )}
      >
        <div className={cn("md:hidden z-10")} onClick={handleOnClick}>
          {open ? (
            <RxCross2 size={"25px"} className={cn("text-secondary")} />
          ) : (
            <GiHamburgerMenu size={"25px"} className={cn("text-secondary")} />
          )}
        </div>
        <SideDrawer />
      </nav>

      {/* for large screen */}

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

export default NavBar;
