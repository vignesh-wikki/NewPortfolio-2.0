import { useSelector } from "react-redux";
import type ThemeType from "../Types/ThemeType";

export default function Bio() {
  const { headingTextColor, headingBorderColor, contentTextColor } =
    useSelector((state: { themeData: ThemeType }) => state.themeData);
  return (
    <>
      <div className=" px-2 col-span-2">
        <div className="md:w-2xl md:p-0 px-5">
          <div
            className={` ${
              headingTextColor + " " + headingBorderColor
            }  font-medium text-2xl w-8  border-b-[5px]`}
          >
            <h1 className="">
              <p>Bio</p>
            </h1>
          </div>
          <div className={`mt-5 ${contentTextColor}`}>
            <p>
              <span className={` text-lg font-bold  pe-5`}>2003</span>
              <span className={`tracking-wider`}>Born in Namakkal, India.</span>
            </p>
          </div>
          <div className={`mt-1 ${contentTextColor}`}>
            <p>
              <span className="text-lg font-bold pe-5">2021</span>
              <span className="tracking-wider">
                Started B.tech. in CSBS at KSRCT.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
