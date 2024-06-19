import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isPwaZoom: localStorage.getItem("isPwaZoom") === "1",
};

const zoomSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    switchPwaZoom: (state) => {
      state.isPwaZoom = !state.isPwaZoom;
      localStorage.setItem("isPwaZoom", state.isPwaZoom ? "1" : "0");
    },
    enablePwaZoom: (state) => {
      state.isPwaZoom = true;
      localStorage.setItem("isPwaZoom", "1");
    },
    disablePwaZoom: (state) => {
      state.isPwaZoom = false;
      localStorage.setItem("isPwaZoom", "0");
    },
  },
});

export const { switchPwaZoom, enablePwaZoom, disablePwaZoom } = zoomSlice.actions;
export default zoomSlice.reducer;
