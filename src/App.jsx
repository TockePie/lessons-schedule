import { ThemeProvider } from "next-themes";

import Header from "./components/Header/Header";
import WeekTabs from "./components/WeekTabs";
import LessonsTable from "./components/Tables/Table";

import { GroupProvider } from "./context/GroupPlatformInfo";
import { MobileProvider } from "./context/MobileContext";
import { ManualScheduleProvider } from "./context/ManualScheduleContext";
import { LessonsExamProvider } from "./context/LessonsExamsContext";

const providers = [
  ThemeProvider,
  GroupProvider,
  MobileProvider,
  LessonsExamProvider,
  ManualScheduleProvider,
];

function withProviders(Component, providers) {
  return function Wrapper() {
    return providers.reduceRight(
      (children, Provider) => <Provider>{children}</Provider>,
      <Component />
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
  const MainContentWithProviders = withProviders(MainContent, providers);
  return <MainContentWithProviders />;
}
