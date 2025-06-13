/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  backgroundColor: "bg-white",
  destinationTextColor: "text-black",
  footerBackgroundColor: "bg-[#f3f4f6]",
  headingTextColor: "text-[#525252]",
  headingBorderColor: "border-[#525252]",
  contentTextColor: "text-slate-800",
  cardColor: "bg-white",
  cardTagColor: "bg-[#e5e7eb]",
  cardTagTextColor: "text-[#505a67]",
  footerTextColor: "text-black",
  darkTheme: false,
};
const slice = createSlice({
  name: "themeData",
  initialState,
  reducers: {
    setDarkMode: (state, action) => {
      if (action.payload === "dark") {
        state.backgroundColor = "bg-[#121212]";
        state.destinationTextColor = "text-[#ffffff]";
        state.footerBackgroundColor = "bg-[#121212] ";
        state.headingTextColor = "text-[#f8ffff]";
        state.headingBorderColor = "border-[#EB8F52]";
        state.contentTextColor = "text-[#ffffff]";
        state.cardColor = "bg-[#282828]";
        state.cardTagColor = "bg-[#282828] border-2 ";
        state.cardTagTextColor = "text-[#ffffff]";
        state.footerTextColor = "text-white";
        state.darkTheme = true;
      }
    },
    setLightMode: (state, action) => {
      if (action.payload === "light") {
        state.backgroundColor = "bg-white";
        state.destinationTextColor = "text-black";
        state.footerBackgroundColor = "bg-[#f3f4f6]";
        state.headingTextColor = "text-[#525252]";
        state.headingBorderColor = "border-[#525252]";
        state.contentTextColor = "text-slate-800";
        state.cardColor = "bg-white";
        state.cardTagColor = "bg-[#e5e7eb]";
        state.cardTagTextColor = "text-[#505a67]";
        state.footerTextColor = "text-black";
        state.darkTheme = false;
      }
    },
  },
});

export const { setDarkMode, setLightMode } = slice.actions;
export const ThemeReducers = slice.reducer;
