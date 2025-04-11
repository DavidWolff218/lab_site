function NavBar() {
  return (
    <>
      <div className="w-full h-24 bg-mainGreen flex justify-between items-center px-6">
      <div className="text-[32px] font-medium text-white font-['Roboto Slab'] leading-none">
        David Wolff
      </div>
      <div className="text-[24px] font-medium text-white font-['Roboto Slab'] leading-none flex space-x-8">
        <a href="#home" className="hover:text-gray-300">Home</a>
        <a href="#labs" className="hover:text-gray-300">Labs</a>
        <a href="#about" className="hover:text-gray-300">About</a>
        <a href="#resume" className="hover:text-gray-300">Resume</a>
      </div>
        </div>

    </>
  );
}

export default NavBar;
