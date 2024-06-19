import { createSlice } from "@reduxjs/toolkit";
import { currentDay } from "../utils/getUkrainianWeek";

const initialState = {
  selectedDay: currentDay()[0],
};

const manualDaySlice = createSlice({
  name: "manualDay",
  initialState,
  reducers: {
    setSelectedDay: (state, action) => {
      state.selectedDay = action.payload;
    },
  },
});

export const { setSelectedDay } = manualDaySlice.actions;
export default manualDaySlice.reducer;
