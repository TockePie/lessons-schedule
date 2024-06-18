import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isManualWeek: false,
};

const manualScheduleSlice = createSlice({
  name: "manualSchedule",
  initialState,
  reducers: {
    setIsManualWeek: (state, action) => {
      state.isManualWeek = action.payload;
    },
  },
});

export const { setIsManualWeek } = manualScheduleSlice.actions;
export default manualScheduleSlice.reducer;
