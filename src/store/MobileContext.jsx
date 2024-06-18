import { createContext } from "react";
import useMobileDetect from 'use-mobile-detect-hook';

export const MobileContext = createContext();

export const MobileProvider = ({ children }) => {
  const detectMobile = useMobileDetect();
  const isDesktopOrLaptop = detectMobile.isDesktop();
  const isMobile = detectMobile.isMobile();

  return (
    <MobileContext.Provider value={{ isDesktopOrLaptop, isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};
