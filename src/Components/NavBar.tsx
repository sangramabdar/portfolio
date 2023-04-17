import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useNavBarContext } from "../context/NavBarContext";

interface SideNavBarProps {
  open: boolean;
  onClick: any;
}

function SideNavBarItem({
  children,
  onClick,
  to,
}: React.PropsWithChildren<{ onClick: any; to: string }>) {
  return (
    <Link
      onClick={onClick}
      className="font-bold text-1xl border-solid border-b-4 border-b-violet-600 m-2"
      to={to}
      smooth={true}
    >
      {children}
    </Link>
  );
}

function SideDrawer({ open, onClick }: SideNavBarProps) {
  const classes = open ? "translate-x-[0px]" : "translate-x-[200px]";

  return (
    <div
      className={
        "w-[200px] flex fixed right-0 top-0 md:hidden transition-all duration-900  flex-col justify-start pt-20 items-center h-screen bg-gray-900 " +
        classes
      }
    >
      <SideNavBarItem to="home" onClick={onClick}>
        Home
      </SideNavBarItem>
      <SideNavBarItem to="about" onClick={onClick}>
        About Me
      </SideNavBarItem>
      <SideNavBarItem to="skills" onClick={onClick}>
        Skills
      </SideNavBarItem>
      <SideNavBarItem to="work" onClick={onClick}>
        Work
      </SideNavBarItem>
      <SideNavBarItem to="contact" onClick={onClick}>
        Contact
      </SideNavBarItem>
    </div>
  );
}

function NavBarItem({ to, children }: React.PropsWithChildren<{ to: string }>) {
  return (
    <Link
      className="font-bold text-1xl border-solid border-b-4 border-b-violet-600"
      to={to}
      smooth={true}
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
    <nav className="fixed w-screen flex justify-between  p-3 z-20 text-white items-center">
      <section></section>
      <section className="md:hidden mr-2 z-10" onClick={handleOnClick}>
        {open ? <RxCross2 size={"25px"} /> : <GiHamburgerMenu size={"25px"} />}
      </section>
      <section className="hidden md:flex justify-evenly w-[350px] p-2">
        <NavBarItem to="home">Home</NavBarItem>
        <NavBarItem to="about">About Me</NavBarItem>
        <NavBarItem to="skills">Skills</NavBarItem>
        <NavBarItem to="work">Work</NavBarItem>
        <NavBarItem to="contact">Contact</NavBarItem>
      </section>
      <SideDrawer open={open} onClick={handleOnClick} />
    </nav>
  );
}

export default NavBar;
