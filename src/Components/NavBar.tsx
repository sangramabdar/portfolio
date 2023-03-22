import React from "react";
import { useState, useContext } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { NavBarContext } from "../context/NavBarContext";

interface SideNavBarProps {
  open: boolean;
  onClick: any;
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
      <Link
        onClick={onClick}
        className="font-bold text-1xl border-solid border-b-4 border-b-violet-600 m-2"
        to="home"
        smooth={true}
      >
        Home
      </Link>
      <Link
        onClick={onClick}
        className="font-bold text-1xl border-solid border-b-4 border-b-violet-600 m-2"
        to="experience"
        smooth={true}
      >
        Skills
      </Link>
      <Link
        onClick={onClick}
        className="font-bold text-1xl border-solid border-b-4 border-b-violet-600 m-2"
        to="work"
        smooth={true}
      >
        Work
      </Link>
      <Link
        onClick={onClick}
        className="font-bold text-1xl border-solid border-b-4 border-b-violet-600 m-2"
        to="about"
        smooth={true}
      >
        About
      </Link>
    </div>
  );
}

function NavBar() {
  const { toggleSideDrawer, open } = useContext(NavBarContext);

  const handleOnClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    toggleSideDrawer();
  };

  return (
    <nav className="fixed w-screen flex justify-between bg-gray-900 p-3 z-20 text-white items-center">
      <section></section>
      <section className="md:hidden mr-2 z-10" onClick={handleOnClick}>
        {open ? <RxCross2 size={"25px"} /> : <GiHamburgerMenu size={"25px"} />}
      </section>
      <section className="hidden md:flex justify-evenly w-[350px] p-2">
        <Link
          className="font-bold text-1xl border-solid border-b-4 border-b-violet-600"
          to="home"
          smooth={true}
        >
          Home
        </Link>
        <Link
          className="font-bold text-1xl border-solid border-b-4 border-b-violet-600"
          to="experience"
          smooth={true}
        >
          Skills
        </Link>
        <Link
          className="font-bold text-1xl border-solid border-b-4 border-b-violet-600"
          to="work"
          smooth={true}
        >
          Work
        </Link>
        <Link
          className="font-bold text-1xl border-solid border-b-4 border-b-violet-600"
          to="about"
          smooth={true}
        >
          About
        </Link>
      </section>
      <SideDrawer open={open} onClick={handleOnClick} />
    </nav>
  );
}

export default NavBar;
