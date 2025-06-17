import heroLogo from "../../assets/212741999-016fddbd-617a-4448-8042-0ecf907aea25.gif";
import Card from "../Utils/Card";
import { useEffect, useRef, useState } from "react";
import { useIsVisible } from "../../Hooks/customHooks/useIsVisible";
import type { ImgCard } from "../Utils/Card";
import Loader from "../Utils/Loader";
import { useSelector } from "react-redux";
import type ThemeType from "../Types/ThemeType";

export default function Projects() {
  const [projectsData, setProjectsData] = useState<ImgCard[]>([]);
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref1);
  const ProjectsDataApiUrl = import.meta.env.VITE_PROJECTS_API_URL;

  const { backgroundColor } = useSelector(
    (state: { themeData: ThemeType }) => state.themeData
  );

  useEffect(() => {
    async function getdata() {
      const response = await fetch(ProjectsDataApiUrl);
      const data = await response.json();
      setProjectsData(data);
    }
    getdata();
  }, [ProjectsDataApiUrl]);

  return (
    <div className="mb-12">
      <div className={`pt-[7rem]  flex justify-center ${backgroundColor}`}>
        <div
          ref={ref1}
          className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] transform
  ${
    isVisible1
      ? "opacity-100 translate-y-0 scale-100"
      : "opacity-0 translate-y-10 scale-95"
  }
  lg:w-4xl md:w-3xl w-[25rem]  px-2 col-span-2`}
        >
          <div>
            <img
              className="object-contain  md:object-cover rounded-3xl shadow-lg"
              src={heroLogo}
              alt="Hero"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div
        className={` grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-5 gap-1 grid-flow-row ${backgroundColor}`}
      >
        {projectsData.length == 0 ? (
          <div className="col-span-1 flex justify-center items-center ">
            <Loader />
          </div>
        ) : (
          projectsData.map((card) => (
            <div key={card.id} className={`col-span-1`}>
              <Card {...card} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
