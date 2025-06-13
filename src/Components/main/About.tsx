import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import type ThemeType from "../Types/ThemeType";

export default function About() {
  const { headingTextColor, headingBorderColor, contentTextColor } =
    useSelector((state: { themeData: ThemeType }) => state.themeData);
  return (
    <>
      <div className={` px-2 col-span-2`}>
        <div className={` md:w-2xl md:p-0 p-5`}>
          <div
            className={` font-medium text-2xl w-16  border-b-[5px] ${
              headingTextColor + " " + headingBorderColor
            }`}
          >
            <h1>About</h1>
          </div>

          <p className={`mt-5 ${contentTextColor} tracking-wider`}>
            Hello! 👋 I am Vignesh a recent Computer Science and Business System
            undergraduate at KSR College of Technology, Tamilnadu, India. I
            enjoy taking complex problems and turning them into simple and
            beautiful webpages, I also love the logic and structure of coding
            and always strive to write elegant and efficient code whether it be
            Java, Javascript, React js, Node js and Spring boot . When I'm not
            coding, you'll find me watching movies, hanging out with my friends
            and exploring the beauty of World.
          </p>

          <div className=" flex justify-center pt-3  border-none ">
            <NavLink
              to="/projects"
              className=" hover:bg-teal-800 text-lg text-white  text-center pt-1 w-44 h-10 rounded-lg bg-[#319795] "
            >
              My projects
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
