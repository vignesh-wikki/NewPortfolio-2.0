import { configureStore } from "@reduxjs/toolkit";
import { ThemeReducers } from "./Slice";

export const Store = configureStore({
  reducer: { themeData: ThemeReducers },
});
