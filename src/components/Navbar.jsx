export default function Navbar() {
  const headers = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white w-[90%] md:w-[70%] lg:w-[55%] min-w-min md:gap-5 rounded-3xl flex flex-row justify-center gap-3 p-3 z-50 shadow-lg">
      {headers.map((header, index) => {
        return (
          <a
            key={index}
            href={header.href}
            className="text-xs sm:text-lg md:text-xl transition-transform duration-200 hover:scale-110 cursor-pointer"
          >
            {header.name}
          </a>
        );
      })}
    </div>
  );
}
