import React from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useNavBarContext } from "../context/NavBarContext";
import cn from "../utils/cn";
import Reveal from "./Reveal";
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
        "text-tertiary font-bold w-fit text-xl border-solid border-b-4 border-b-secondary-1"
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
        "font-bold text-xl border-solid border-b-4 text-tertiary border-b-secondary-1 cursor-pointer opacity-50"
      )}
      to={to}
      smooth={true}
      offset={-100}
    >
      {children}
    </Link>
  );
}

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
          "top-0 right-0 left-0 fixed flex p-4 px-4 md:px-8 z-20 text-black bg-primary-2 md:hidden"
        )}
      >
        <div className={cn("md:hidden z-10")} onClick={handleOnClick}>
          {open ? (
            <RxCross2 size={"25px"} />
          ) : (
            <GiHamburgerMenu size={"25px"} />
          )}
        </div>
        <SideDrawer />
      </nav>

      {/* for large screen */}

      <motion.nav
        whileInView={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        viewport={{
          once: true,
        }}
        className={cn(
          "hidden z-10 md:flex w-[550px] top-4 fixed left-[50%] translate-x-[-50%] justify-center space-x-8 bg-primary-2 py-2 px-4 rounded-full"
        )}
      >
        <NavBarItem to="home">Home</NavBarItem>
        <NavBarItem to="about">About Me</NavBarItem>
        <NavBarItem to="skills">Skills</NavBarItem>
        <NavBarItem to="work">Work</NavBarItem>
        <NavBarItem to="contact">Contact</NavBarItem>
      </motion.nav>

      {/* placeholder for sidenavbar */}
      {/* <div
        className={cn(
          "hidden md:flex flex-col top-0 left-0 bottom-0 w-[300px] items-start space-y-4 p-4 bg-primary-1"
        )}
      >
        asasdad
      </div> */}
    </>
  );
}

export default NavBar;
