import { Boxes } from "../Components/ui/background-boxes";
import { cn } from "../utils/cn";
import { TypewriterEffect } from "../Components/ui/typewriter-effect";
import { Link } from "react-router-dom";

export function BackgroundBoxesDemo() {
  const words = [
    {
      text: "Share",
    },
    {
      text: "Your",
    },
    {
      text: "Favorite",
    },
    {
      text: "Videos",
    },
    {
      text: "With",
    },
    {
      text: "VTube",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="h-[640px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <TypewriterEffect className={cn("md:text-4xl text-xl text-white relative z-20")} words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10 z-20">
        <button className="w-40 h-12 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Join now
        </button>
        <button className="w-40 h-12 rounded-xl bg-white text-black border border-black  text-sm">
          <Link to={"/add-videos"}>Add New Videos</Link>
        </button>
      </div>
      {/* <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p> */}
    </div>
  );
}
