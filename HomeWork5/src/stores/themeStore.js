import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../Slices/themeSlice"

export const themeStore = configureStore({
  reducer: {
    theme: themeReducer,
  },
});