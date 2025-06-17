import { useRef } from "react";
import { useIsVisible } from "../../Hooks/customHooks/useIsVisible";


export default function HeroImage({ value }: { value: string }) {
  const ref1 = useRef<HTMLDivElement | null>(null);
  const isVisible1 = useIsVisible(ref1);
  return (
    <>
      <div
        ref={ref1}
        className={`transition-all duration-[1200ms] ease-[cubic-bezier(0.4,0,0.2,1)] transform
        ${
          isVisible1
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        }
        lg:w-4xl md:w-3xl w-[30rem] px-2 col-span-2`}
      >
        <div>
          <img
            className="object-contain md:object-cover rounded-3xl shadow-lg"
            src={value}
            alt="Hero"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
