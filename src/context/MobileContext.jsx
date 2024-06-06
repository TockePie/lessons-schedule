import { createContext } from "react";
import { useMediaQuery } from "react-responsive";

export const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 645 });
  const isMobile = useMediaQuery({ maxDeviceWidth: 645 });

  return (
    <MobileContext.Provider value={{ isDesktopOrLaptop, isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};
