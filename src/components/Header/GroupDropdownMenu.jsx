import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  memo,
  useContext,
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

import { setCurrentGroup } from "../../store/group";
import { setIsPwaZoom } from "../../store/zoom";
import { groupData, examsData } from "../../data/groupData";
import { MobileContext } from "../../store/MobileContext";

const GroupDropdown = memo(function GroupDropdown() {
  const { currentGroup } = useSelector((state) => state.group);
  const { isPwaZoom } = useSelector((state) => state.zoom);
  const { isMobile, isDesktopOrLaptop } = useContext(MobileContext);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.replace(/\/$/, '');
  const [selectedTabKey, setSelectedTabKey] = useState("/lessons-schedule");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (pathname === "/lessons-schedule") {
      setSelectedTabKey("lessons");
    } else if (pathname === "/lessons-schedule/exams") {
      setSelectedTabKey("exams");
    }
  }, [pathname]);

  const handleSelectGroup = useCallback(
    (group) => {
      dispatch(setCurrentGroup(group));
      if (!groupData[group].allowPwaZoom) {
        dispatch(setIsPwaZoom(false));
      }
      setIsDropdownOpen(false);
    },
    [dispatch, setIsDropdownOpen]
  );

  const handleExams = useCallback(
    (selectedKey) => {
      switch (selectedKey) {
        case "lessons":
          navigate("/lessons-schedule");
          break;
        case "exams":
          navigate("/lessons-schedule/exams");
          break;
      }
    },
    [navigate]
  );

  const handlePwaZoom = useCallback(() => {
    const newState = !isPwaZoom;
    dispatch(setIsPwaZoom(newState));
    localStorage.setItem("isPwaZoom", newState ? "1" : "0");
  }, [isPwaZoom, dispatch]);

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
      <DropdownTrigger aria-label="Button to choose group">
        <Button
          variant="bordered"
          color="primary"
          aria-label="Button for switching group"
        >
          {currentGroup}
          {isDesktopOrLaptop && <Kbd>Q</Kbd>}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="list of groups">
        <DropdownSection showDivider>
          <DropdownItem textValue="Tabs for lessons and exams">
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
