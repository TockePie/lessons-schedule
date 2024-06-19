import { lazy, memo, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";

import GroupDropdown from "./GroupDropdownMenu";
import WeekInfo from "./WeekInfoText";

import { groupData } from "../../data/groupData";
import { MobileContext } from "../../store/MobileContext";

const LazyImage = lazy(() =>
  import("@nextui-org/react").then((module) => ({ default: module.Image }))
);

function Header() {
  const { currentGroup } = useSelector((state) => state.group);
  const { isDesktopOrLaptop, isMobile } = useContext(MobileContext);

  return (
    <>
      <Navbar isBordered={isMobile} shouldHideOnScroll={isMobile}>
        <NavbarBrand>
          <LazyImage
            width={50}
            alt="logo"
            src={groupData[currentGroup]?.image}
          />
          {isDesktopOrLaptop && <WeekInfo screen="desktop" />}
        </NavbarBrand>
        {isMobile && (
          <NavbarContent>
            <WeekInfo screen="mobile" className="justify-center" />
          </NavbarContent>
        )}
        <NavbarContent justify="end">
          <GroupDropdown />
        </NavbarContent>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </>
  );
}

const MemoizedHeader = memo(Header);
export default MemoizedHeader;
