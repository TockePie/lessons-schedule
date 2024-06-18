import { createSlice } from "@reduxjs/toolkit";
import checkDay from "../utils/checkDay";

const initialState = {
  selectedDay: checkDay(),
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
