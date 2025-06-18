import { useSelector } from "react-redux";
import type ThemeType from "../Types/ThemeType";
import { Link } from "react-router-dom";

export default function SocialMediaLinks() {
  const { headingTextColor, headingBorderColor } = useSelector(
    (state: { themeData: ThemeType }) => state.themeData
  );
  return (
    <>
      <div className="px-2 col-span-2">
        <div className="md:w-2xl md:p-0 p-5">
          <div>
            <div
              className={` font-medium text-2xl w-36  border-b-[5px] ${
                headingBorderColor + " " + headingTextColor
              } `}
            >
              <h1 className={``}>On the web</h1>
            </div>

            <Link
              target="_blank"
              to="https://github.com/vignesh-wikki"
              className="hover:cursor-pointer font-bold  hover:decoration-blue-700 text-[#347f80] flex align-middle justify-center  mt-3 hover:underline underline-offset-4 hover:bg-cyan-100  w-48 h-10 rounded-md"
            >
              <p className="mt-2 "></p>
              <div className="mt-1">
                <p>Github: @Vignesh-Wikki</p>
              </div>
            </Link>

            <Link
              target="_blank"
              to="https://www.linkedin.com/in/vignesh-vicky-772810224/"
              className="hover:cursor-pointer font-bold  hover:decoration-blue-700 text-base text-[#347f80] flex align-middle justify-center  mt-3 hover:underline underline-offset-4 hover:bg-cyan-100  w-54 h-10 rounded-lg"
            >
              <p className="mt-2 "></p>
              <div className="mt-1">
                <p>LinkedIn: @Vignesh-Shivan</p>
              </div>
            </Link>

            <Link
              to="/"
              target="_blank"
              className="hover:cursor-pointer font-bold text-[#347f80] flex align-middle justify-center  mt-3 hover:underline hover:decoration-blue-700 underline-offset-4 hover:bg-cyan-100  w-54 h-10 rounded-md"
            >
              <p className="mt-2 "></p>
              <div className="mt-1">
                <p>Portfolio: @Vignesh-Wikki</p>
              </div>
            </Link>
            <div className=" flex justify-center pt-3 pb-3 border-none ">
              <a
                href="https://newportfolio-2-0backend.onrender.com/files/Vignesh_(resume).pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className=" hover:bg-teal-800 text-lg text-white  w-52 h-10 rounded-lg bg-[#319795] text-center pt-1"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
