import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPwaZoom: localStorage.getItem("isPwaZoom") === "1",
};

const zoomSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    setIsPwaZoom: (state, action) => {
      state.isPwaZoom = action.payload;
      localStorage.setItem("isPwaZoom", action.payload ? "1" : "0");
    },
  },
});

export const { setIsPwaZoom } = zoomSlice.actions;
export default zoomSlice.reducer;
