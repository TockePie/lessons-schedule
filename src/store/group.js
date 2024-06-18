import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentGroup: localStorage.getItem("group") || "Оберіть групу",
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setCurrentGroup: (state, action) => {
      state.currentGroup = action.payload;
      localStorage.setItem("group", action.payload);
    },
  },
});

export const { setCurrentGroup } = groupSlice.actions;
export default groupSlice.reducer;
