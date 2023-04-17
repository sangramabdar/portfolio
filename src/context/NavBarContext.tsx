import React, { useState, Dispatch, useContext } from "react";

const NavBarContext = React.createContext({
  open: false,
  toggleSideDrawer: () => {},
});

const NavBarProvider = ({ children }: React.PropsWithChildren<any>) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleSideDrawer = () => {
    setOpen(!open);
  };

  return (
    <NavBarContext.Provider value={{ open, toggleSideDrawer }}>
      {children}
    </NavBarContext.Provider>
  );
};

const useNavBarContext = () => useContext(NavBarContext);

export { NavBarProvider, useNavBarContext };
