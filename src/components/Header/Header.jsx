import { useContext, lazy, memo } from "react";
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";

import GroupDropdown from "./GroupDropdownMenu";
import WeekInfo from "./WeekInfoText";

import groupData from "../../data/groupData";
import { GroupContext } from "../../context/GroupPlatformInfo";
import { MobileContext } from "../../context/MobileContext";

const LazyImage = lazy(() =>
  import("@nextui-org/react").then((module) => ({ default: module.Image }))
);

function Header() {
  const { currentGroup } = useContext(GroupContext);
  const { isDesktopOrLaptop, isMobile } = useContext(MobileContext);
  const groupLogo = groupData[currentGroup]?.image;

  return (
    <Navbar>
      <NavbarBrand>
        <LazyImage width={50} alt="logo" src={groupLogo} />
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
  );
}

const MemoizedHeader = memo(Header);
export default MemoizedHeader;
