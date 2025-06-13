import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import type ThemeType from "../Types/ThemeType";

export interface ImgCard {
  id: string;
  title: string;
  content: string;
  imgPath: string;
  tags: string[];
  link: string;
  live: boolean;
}

export default function Card(data: ImgCard) {
  const {
    headingTextColor,
    contentTextColor,
    cardColor,
    headingBorderColor,
    cardTagTextColor,
    backgroundColor,
    cardTagColor,
  } = useSelector((state: { themeData: ThemeType }) => state.themeData);
  return (
    <>
      <div>
        <div className={`flex p-5 justify-center ${backgroundColor}`}>
          <div
            className={`w-[17rem]  rounded-lg overflow-hidden shadow-lg ${cardColor}`}
          >
            <img className="w-full" src={data.imgPath} alt={data.title} />
            <div className="px-6 py-4">
              <div className={`font-bold text-xl mb-2 ${headingTextColor}`}>
                {data.title}
                <span className="ps-2 font-light">
                  <span className="relative flex items-end size-3">
                    <span
                      className={`absolute inline-flex h-full w-full animate-ping rounded-full ${
                        data.live
                          ? "bg-green-400 opacity-75"
                          : "bg-red-400 opacity-75"
                      }`}
                    ></span>
                    <span
                      className={`relative inline-flex size-3 rounded-full ${
                        data.live
                          ? "bg-green-400 opacity-75"
                          : "bg-red-500 opacity-75"
                      }`}
                    ></span>
                  </span>
                  {data.live ? <>(Live)</> : <>(Not in Live)</>}
                </span>
              </div>
              <p className={` text-base ${contentTextColor}`}>{data.content}</p>
              <Link
                target="_blank"
                to={data.link}
                className="text-xl underline text-blue-600"
              >
                Link
              </Link>
            </div>
            <div className="px-6 pt-4 pb-2">
              {data.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`inline-block rounded-full px-3 py-1 text-sm font-semibold  ${
                    (headingBorderColor +" " + cardTagTextColor+" "+cardTagColor)
                  } mr-2 mb-2`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
