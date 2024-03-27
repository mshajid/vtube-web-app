import React from "react";
import { AnimatedTooltip } from "../Components/ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Shajid Shafee",
    designation: "Full Stack Web Engineer",
    image: "https://shajid-blog-react.netlify.app/assets/Shajid-E393mccF.png",
  },
  {
    id: 2,
    name: "Bearcin Sweety",
    designation: "Full Stack Engineer",
    image: "https://avatars.githubusercontent.com/u/108384050?v=4",
  },
  {
    id: 3,
    name: "Gayathree Gangathar",
    designation: "Full Stack Engineer",
    image: "https://avatars.githubusercontent.com/u/102051237?v=4",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
