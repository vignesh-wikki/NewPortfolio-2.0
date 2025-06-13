import { useRef } from "react";
import { useIsVisible } from "../../Hooks/customHooks/useIsVisible";
import { useSelector } from "react-redux";
import Avatar from "../../assets/avatar.png";

export default function Distination() {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible = useIsVisible(ref1);
  const { destinationTextColor } = useSelector(
    (state: { themeData: { destinationTextColor: string } }) => state.themeData
  );

  return (
    <>
      <div
        ref={ref1}
        className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] transform
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        } px-2 font-extrabold md:text-4xl text-2xl col-span-2`}
      >
        <div
          className={`animate-bounce md:text-start text-center ${destinationTextColor} `}
        >
          Hello, I'm a Fullstack Developer!
        </div>
      </div>
      <div
        ref={ref1}
        className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] transform
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        } md:px-2  ps-7`}
      >
        <h4 className={` tracking-normal pt-2`}>
          <p className={`font-semibold text-xl ${destinationTextColor}`}>
            B.Tech CSBS Undergraduate
          </p>
          <span className="text-[#d47395]">(Fullstack Developer)</span>
        </h4>
      </div>
      <div
        ref={ref1}
        className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] transform
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        } mt-[-1rem] w-36 h-36 md:ms-0  ms-5  overflow-hidden`}
      >
        <img
          className=" w-36 h-36 rounded-[90px]"
          src={Avatar}
          alt="avatar"
          loading="lazy"
        />
      </div>
    </>
  );
}
