import { useState } from "react";
import { darkTheme, lightTheme } from "../Utils/Constants";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLightMode } from "../../Context/Slice";
import type ThemeType from "../Types/ThemeType";

export default function Toggle() {
  const isDarkMode = useSelector(
    (state: { themeData: ThemeType }) => state.themeData.darkTheme
  );

  const dispatch = useDispatch();
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    if (isDarkMode) {
      console.log(isDarkMode);
      dispatch(setLightMode("light"));
      setTheme(lightTheme);
    } else {
      dispatch(setDarkMode("dark"));
      setTheme(darkTheme);
    }
  };

  return (
    <div>
      <button
        className="w-6 h-5 rounded-full  flex items-center transition duration-1000 focus:outline-none"
        onClick={toggleTheme}
      >
        <div
          id="switch-toggle"
          className={`w-12 h-6 relative rounded-full transition duration-1000 transform  text-white ${theme.animation}`}
        >
          {theme.svg}
        </div>
      </button>
    </div>
  );
}
