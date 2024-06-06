import { useContext, useState, useEffect, useCallback } from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Switch,
  Kbd,
} from "@nextui-org/react";

import { GroupContext } from "../../context/GroupPlatformInfo";
import { MobileContext } from "../../context/MobileContext";
import { groupData } from "../../data/groupData";

export default function GroupDropdown() {
  const { currentGroup, setCurrentGroup, isPwaZoom, setIsPwaZoom } =
    useContext(GroupContext);
  const { isDesktopOrLaptop, isMobile } = useContext(MobileContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelect = useCallback(
    (group) => {
      setCurrentGroup(group);
      localStorage.setItem("group", group);
      if (group === "ІО-35") {
        setIsPwaZoom(false);
        localStorage.setItem("isPwaZoom", "0");
      }
      setIsDropdownOpen(false);
    },
    [setCurrentGroup, setIsPwaZoom]
  );

  const handlePwaZoom = useCallback(() => {
    const newState = !isPwaZoom;
    setIsPwaZoom(newState);
    localStorage.setItem("isPwaZoom", newState ? "1" : "0");
  }, [isPwaZoom, setIsPwaZoom]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "q" || event.key === "Q") {
        setIsDropdownOpen((prevState) => !prevState);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <Dropdown
      className="justify-end"
      isOpen={isDropdownOpen}
      onOpenChange={setIsDropdownOpen}
      aria-label="Group Chooser"
    >
      <DropdownTrigger>
        <Button variant="bordered" color="primary">
          {currentGroup}
          {isDesktopOrLaptop && <Kbd>Q</Kbd>}
        </Button>
      </DropdownTrigger>
      <DropdownMenu disabledKeys={["ІО-35"]}>
        <DropdownItem>
          <Switch
            onValueChange={handlePwaZoom}
            isSelected={isDesktopOrLaptop && isPwaZoom}
            isDisabled={localStorage.getItem("group") === "ІО-35" || isMobile}
          >
            PWA ZOOM
          </Switch>
        </DropdownItem>
        {Object.keys(groupData).map((group) => (
          <DropdownItem key={group} onClick={() => handleSelect(group)}>
            {group}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
