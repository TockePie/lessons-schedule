import { ThemeProvider } from "next-themes";

import Header from "./components/Header/Header";
import LessonsTable from "./components/Tables/Table";

import { GroupProvider } from "./context/GroupPlatformInfo";
import { MobileProvider } from "./context/MobileContext";

export default function App() {
  return (
    <ThemeProvider>
      <GroupProvider>
        <MobileProvider>
          <Header />
          <LessonsTable />
        </MobileProvider>
      </GroupProvider>
    </ThemeProvider>
  );
}
