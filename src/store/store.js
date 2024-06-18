import { configureStore } from "@reduxjs/toolkit";

import groupReducer from "./group";
import manualDayReducer from "./manualDay";
import manualScheduleReducer from "./manualSchedule";
import zoomReducer from "./zoom";

export const store = configureStore({
  reducer: {
    group: groupReducer,
    manualDay: manualDayReducer,
    manualSchedule: manualScheduleReducer,
    zoom: zoomReducer,
  },
});
