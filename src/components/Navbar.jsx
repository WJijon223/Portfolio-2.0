export default function Navbar() {
  const headers = [
    { name: "Home" },
    { name: "About" },
    { name: "Skills" },
    { name: "Experience" },
    { name: "Projects" },
    { name: "Contact" },
  ];

  return (
    <div className="bg-white w-[90%] md:w-[70%] lg:w-[55%] min-w-min md:gap-5 rounded-3xl mx-auto flex flex-row justify-center mt-5 gap-3 p-3">
      {headers.map((header, index) => {
        return (
          <div
            key={index}
            className="text-xs sm:text-lg md:text-xl transition-transform duration-200 hover:scale-110"
          >
            {header.name}
          </div>
        );
      })}
    </div>
  );
}
