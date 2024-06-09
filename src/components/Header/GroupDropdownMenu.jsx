import {
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  memo,
} from "react";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  DropdownSection,
  Switch,
  Kbd,
  Tabs,
  Tab,
} from "@nextui-org/react";

import { GroupContext } from "../../context/GroupPlatformInfo";
import { MobileContext } from "../../context/MobileContext";
import { LessonsExamContext } from "../../context/LessonsExamsContext";
import { groupData, examsData } from "../../data/groupData";

const GroupDropdown = memo(function GroupDropdown() {
  const { currentGroup, setCurrentGroup, isPwaZoom, setIsPwaZoom } =
    useContext(GroupContext);
  const { isDesktopOrLaptop, isMobile } = useContext(MobileContext);
  const { selectedTabKey, setSelectedTabKey } = useContext(LessonsExamContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSelectGroup = useCallback(
    (group) => {
      setCurrentGroup(group);
      localStorage.setItem("group", group);
      if (!groupData[group].allowPwaZoom) {
        setIsPwaZoom(false);
        localStorage.setItem("isPwaZoom", "0");
      }
      setIsDropdownOpen(false);
    },
    [setCurrentGroup, setIsPwaZoom]
  );

  const handleExams = useCallback(
    (selectedKey) => {
      window.location.reload();
      const isExamsNow = selectedKey === "exams";
      localStorage.setItem("isExams", isExamsNow ? "1" : "0");
      setSelectedTabKey(selectedKey);
    },
    [setSelectedTabKey]
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

  const dropdownItems = useMemo(() => {
    const items = selectedTabKey === "lessons" ? groupData : examsData;
    return Object.keys(items).map((group) => (
      <DropdownItem
        key={group}
        onClick={() => handleSelectGroup(group)}
        onTouchEnd={() => handleSelectGroup(group)}
        textValue={group}
      >
        {group}
      </DropdownItem>
    ));
  }, [selectedTabKey, handleSelectGroup]);

  return (
    <Dropdown
      className="justify-end"
      isOpen={isDropdownOpen}
      onOpenChange={setIsDropdownOpen}
      aria-label="Group Chooser"
    >
      <DropdownTrigger>
        <Button
          variant="bordered"
          color="primary"
          aria-label="Button for switching group"
        >
          {currentGroup}
          {isDesktopOrLaptop && <Kbd>Q</Kbd>}
        </Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownSection showDivider>
          <DropdownItem>
            <Tabs selectedKey={selectedTabKey} onSelectionChange={handleExams}>
              <Tab title="Заняття" key="lessons" />
              <Tab title="Іспити" key="exams" />
            </Tabs>
          </DropdownItem>
          <DropdownItem textValue="PWA Zoom Toggle">
            <Switch
              size="sm"
              onValueChange={handlePwaZoom}
              isSelected={isDesktopOrLaptop && isPwaZoom}
              isDisabled={!groupData[currentGroup]?.allowPwaZoom || isMobile}
            >
              PWA ZOOM
            </Switch>
          </DropdownItem>
        </DropdownSection>
        {dropdownItems}
      </DropdownMenu>
    </Dropdown>
  );
});

export default GroupDropdown;
