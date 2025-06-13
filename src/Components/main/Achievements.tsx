import { useSelector } from "react-redux";
import type ThemeType from "../Types/ThemeType";

export default function Achievements() {
  const { headingTextColor, headingBorderColor, contentTextColor } =
    useSelector((state: { themeData: ThemeType }) => state.themeData);
  return (
    <>
      <div className=" px-2 col-span-2">
        <div className="md:w-2xl md:p-0 px-5">
          <div>
            <div
              className={`font-medium text-2xl w-36  border-b-[5px] ${
                headingBorderColor + " " + headingTextColor
              } `}
            >
              <h1 className={``}>Achievements</h1>
            </div>
            <div className={` mt-5 ${contentTextColor}`}>
              <ul className=" tracking-wider">
                <li> ● LeetCode </li>
                <li> ● Hackathon</li>
                <li> ● College competitive programming contest</li>
                <li>
                  ● NPTEL Elite certificate in Java, Data Structures and
                  Algorithms and Cloud Computing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
