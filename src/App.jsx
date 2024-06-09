import { ThemeProvider } from "next-themes";

import Header from "./components/Header/Header";
import WeekTabs from "./components/WeekTabs";
import LessonsTable from "./components/Tables/Table";

import { GroupProvider } from "./context/GroupPlatformInfo";
import { MobileProvider } from "./context/MobileContext";
import { ManualScheduleProvider } from "./context/ManualScheduleContext";
import { LessonsExamProvider } from "./context/LessonsExamsContext";

function withProviders(Component) {
  return function Wrapper() {
    return (
      <ThemeProvider>
        <GroupProvider>
          <MobileProvider>
            <LessonsExamProvider>
              <ManualScheduleProvider>
                <Component />
              </ManualScheduleProvider>
            </LessonsExamProvider>
          </MobileProvider>
        </GroupProvider>
      </ThemeProvider>
    );
  };
}

function MainContent() {
  return (
    <>
      <Header />
      <WeekTabs />
      <LessonsTable />
    </>
  );
}

export default function App() {
  const MainContentWithProviders = withProviders(MainContent);
  return <MainContentWithProviders />;
}
