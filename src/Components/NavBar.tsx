import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

interface SideNavBarProps {
  open: boolean;
  onClick: any;
}

function SideNavBar({ open, onClick }: SideNavBarProps) {
  const classes = open ? "translate-x-[0]" : "translate-x-[600px]";

  return (
    <div
      className={
        "w-full flex fixed right-0 top-0 md:hidden transition-all duration-500 flex-col justify-start pt-20 items-center h-screen bg-gray-900 " +
        classes
      }
    >
      <Link onClick={onClick} className="m-2" to="home" smooth={true}>
        Home
      </Link>
      <Link onClick={onClick} className="m-2" to="experience" smooth={true}>
        Experience
      </Link>
      <Link onClick={onClick} className="m-2" to="work" smooth={true}>
        Work
      </Link>
      <Link onClick={onClick} className="m-2" to="about" smooth={true}>
        About
      </Link>
    </div>
  );
}

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleOnClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="fixed w-screen flex justify-between p-3 text-white items-center">
      <section>Sangram</section>
      <section className="md:hidden z-10" onClick={handleOnClick}>
        {open ? <RxCross2 /> : <GiHamburgerMenu />}
      </section>
      <section className="hidden md:flex justify-evenly w-[350px] p-2 ">
        <Link to="home" smooth={true}>
          Home
        </Link>
        <Link to="experience" smooth={true}>
          Experience
        </Link>
        <Link to="work" smooth={true}>
          Work
        </Link>
        <Link to="about" smooth={true}>
          About
        </Link>
      </section>
      <SideNavBar open={open} onClick={handleOnClick} />
    </nav>
  );
}

export default NavBar;
