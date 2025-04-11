import LabsHeroImage from "../assets/LabsHeroImage.jpeg";

function Hero() {
  return (
    <div className="w-full mx-auto mt-12 px-4 md:px-8 h-[29.4rem] bg-gray-100 flex items-start">
      <div className="mr-8">
        <h1 className="text-[32px] font-medium font-['Roboto_Slab'] pl-6">
          So you just graduated
        </h1>
        <p className="text-[18px] font-normal font-['Open_Sans'] pt-4 pl-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua.
        </p>
      </div>
      <img src={LabsHeroImage} alt="Labs Hero" className="w-1/2 max-h-[29.4rem] rounded" />
    </div>
  );
}

export default Hero;
