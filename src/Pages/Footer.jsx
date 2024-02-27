import { AnimatedTooltipPreview } from "../Components/Contributors";

const Footer = () => {
  return (
    <>
      <div className="bg-[#003566] p-2">
        <div className="flex items-center justify-center gap-x-10">
          <h2 className="text-xl text-white tracking-wide font-semibold text-wrap">
            Lead contributors to VTube
          </h2>
          <div>
            <AnimatedTooltipPreview />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
