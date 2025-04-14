import HomeLabRow from "../components/HomeLabRow";

function HomeLabContainer() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-['Roboto_Slab'] font-medium text-[24px] md:text-[28px] lg:text-[32px] leading-[100%] tracking-[0px]">
        Explore Labs
      </h1>
      <HomeLabRow title="Recent" />
      <HomeLabRow title="React" />
    </div>
  );
  
}

export default HomeLabContainer;
