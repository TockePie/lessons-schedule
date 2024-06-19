import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isManualWeek: false,
};

const manualScheduleSlice = createSlice({
  name: "manualSchedule",
  initialState,
  reducers: {
    switchWeeks: (state) => {
      state.isManualWeek = !state.isManualWeek;
    },
  },
});

export const { switchWeeks } = manualScheduleSlice.actions;
export default manualScheduleSlice.reducer;
