import LabCard from "./LabCard";

type HomeLabRowProps = {
  title: string;
};

function HomeLabRow({title}: HomeLabRowProps) {
  return (
    <div className="space-y-8 w-full px-4 mt-8">
      <div className="flex flex-col">
        <div className="flex justify-start items-center">
          <h2 className="font-['Roboto_Slab'] font-medium text-[24px] md:text-[28px] lg:text-[32px] leading-[100%] tracking-[0px]">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          <LabCard />
          <LabCard />
          <LabCard />
        </div>
      </div>
    </div>
  );
}

export default HomeLabRow;
