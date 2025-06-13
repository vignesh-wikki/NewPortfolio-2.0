import { useSelector } from "react-redux";
import type ThemeType from "../Types/ThemeType";

export default function Hobbies() {
  const { headingTextColor, headingBorderColor, contentTextColor } =
    useSelector((state: { themeData: ThemeType }) => state.themeData);
  return (
    <>
      <div className=" px-2 col-span-2">
        <div className="md:w-2xl md:p-0 px-5">
          <div>
            <div
              className={`${
                headingTextColor + " " + headingBorderColor
              } font-medium text-2xl w-8  border-b-[5px]`}
            >
              <h1 className={` w-8 animate-pulse`}>
                I<span className="p-2 w-10 text-orange-600">♥</span>
              </h1>
            </div>
            <div className={`${contentTextColor} mt-5  tracking-wider`}>
              Coding, Music, Movies , Photography.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
