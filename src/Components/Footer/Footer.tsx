import { useSelector } from "react-redux";
import type ThemeType from "../Types/ThemeType";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { footerBackgroundColor, footerTextColor } = useSelector(
    (state: { themeData: ThemeType }) => state.themeData
  );
  return (
    <>
      <footer className={`relative ${footerBackgroundColor}`}>
        <hr className="text-white" />
        <div
          className={` ${footerBackgroundColor} absolute bottom-0  w-full text-center flex-grow flex justify-center py-3`}
        >
          <div className={`border-0 ${footerTextColor}`}>
            ©{currentYear} Vignesh. All Rights Reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
