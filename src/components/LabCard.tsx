function LabCard() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center p-3 px-12 border-mainGreen border-solid border-4 rounded-md bg-white shadow-md shadow-black/30 space-y-2 h-[261px]">
        <h2 className="text-xl font-semibold">Lab Title</h2>
        <p className="text-sm text-gray-700">
          Brief description of the lab goes here. It adjusts based on screen
          size. Blah Blah blah blha blah blha blah blah blha blah blha blah
        </p>
      </div>
    </>
  );
}

export default LabCard;
