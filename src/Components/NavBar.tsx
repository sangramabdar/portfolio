import React from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useNavBarContext } from "../context/NavBarContext";

function SideNavBarItem({
  children,
  onClick,
  to,
}: React.PropsWithChildren<{ onClick: any; to: string }>) {
  return (
    <Link
      onClick={onClick}
      className="font-bold w-fit text-2xl border-solid border-b-4 border-b-violet-600"
      to={to}
      smooth={true}
      offset={-50}
    >
      {children}
    </Link>
  );
}

function SideDrawer() {
  const { toggleSideDrawer, open } = useNavBarContext();
  const classes = open ? "translate-x-[0px]" : "translate-x-[100%]";

  const handleOnClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    toggleSideDrawer();
  };

  return (
    <div
      className={
        "fixed bg-gray-900 opacity-90 h-screen w-full flex right-0 top-0 transition-all duration-900 flex-col justify-start pt-20 space-y-8 px-4 md:hidden " +
        classes
      }
    >
      <SideNavBarItem to="home" onClick={handleOnClick}>
        Home
      </SideNavBarItem>
      <SideNavBarItem to="about" onClick={handleOnClick}>
        About Me
      </SideNavBarItem>
      <SideNavBarItem to="skills" onClick={handleOnClick}>
        Skills
      </SideNavBarItem>
      <SideNavBarItem to="work" onClick={handleOnClick}>
        Work
      </SideNavBarItem>
      <SideNavBarItem to="contact" onClick={handleOnClick}>
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
    <nav className="fixed flex justify-between p-4 px-4 md:px-8 z-20 text-white items-center">
      <div className="md:hidden z-10" onClick={handleOnClick}>
        {open ? <RxCross2 size={"25px"} /> : <GiHamburgerMenu size={"25px"} />}
      </div>
      <div className="hidden md:flex justify-evenly space-x-4">
        <NavBarItem to="home">Home</NavBarItem>
        <NavBarItem to="about">About Me</NavBarItem>
        <NavBarItem to="skills">Skills</NavBarItem>
        <NavBarItem to="work">Work</NavBarItem>
        <NavBarItem to="contact">Contact</NavBarItem>
      </div>
      <SideDrawer />
    </nav>
  );
}

export default NavBar;
