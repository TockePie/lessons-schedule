import { createSlice } from "@reduxjs/toolkit";
import { getCurrentDay } from "../utils/getData";

const initialState = {
  selectedDay: getCurrentDay()[0],
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
