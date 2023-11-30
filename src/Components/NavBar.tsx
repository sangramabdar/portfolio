import React from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useNavBarContext } from "../context/NavBarContext";
import cn from "../utils/cn";

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
        "text-tertiary font-bold w-fit text-xl border-solid border-b-4 border-b-secondary-1 opacity-30"
      )}
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

  const handleOnClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    toggleSideDrawer();
  };

  return (
    <ul
      className={cn(
        "fixed bg-primary-2/20 backdrop-blur-lg h-screen w-full flex right-0 top-0 transition-all duration-900 flex-col justify-start pt-20 space-y-8 px-4 md:hidden ",
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
      className="font-bold text-xl border-solid border-b-4 text-tertiary border-b-secondary-1 cursor-pointer opacity-30"
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
      <nav className="top-0 right-0 left-0 fixed flex p-4 px-4 md:px-8 z-20 text-white bg-primary-1 md:hidden">
        <div className="md:hidden z-10" onClick={handleOnClick}>
          {open ? (
            <RxCross2 size={"25px"} />
          ) : (
            <GiHamburgerMenu size={"25px"} />
          )}
        </div>
        <SideDrawer />
      </nav>

      {/* for large screen */}
      <nav className="hidden md:flex fixed flex-col top-0 left-0 bottom-0 w-[180px] items-start space-y-4 p-8 py-16 bg-primary-2">
        <NavBarItem to="home">Home</NavBarItem>
        <NavBarItem to="about">About Me</NavBarItem>
        <NavBarItem to="skills">Skills</NavBarItem>
        <NavBarItem to="work">Work</NavBarItem>
        <NavBarItem to="contact">Contact</NavBarItem>
      </nav>

      {/* placeholder for sidenavbar */}
      <div className="hidden md:flex flex-col top-0 left-0 bottom-0 w-[300px] items-start space-y-4 p-4 bg-primary-1"></div>
    </>
  );
}

export default NavBar;
