export default function Skills() {
  const skills = [
    {
      name: "Java",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
          alt="Java"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Python",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          alt="Python"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "JavaScript",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          alt="JavaScript"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "HTML",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          alt="HTML5"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "CSS",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          alt="CSS3"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "SQL",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
          alt="SQL"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "React.js",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          alt="React"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Tailwind CSS",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          alt="Tailwind CSS"
          className="w-12 h-12"
        />
      ),
    },
    {
      name: "Flask",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
          alt="Flask"
          className="w-12 h-12"
        />
      ),
    },
  ];

  return (
    <section className="w-full px-4 py-12 mx-auto min-h-screen flex items-center">
      <div className="max-w-sm mx-auto md:max-w-6xl bg-slate-400 rounded-2xl shadow-lg p-8 md:p-12 space-y-6 w-full">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 md:mb-8">
          Tech Stack
        </h2>

        {/* Mobile layout - 2 columns */}
        <div className="grid grid-cols-2 gap-6 md:hidden">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center group hover:scale-105 transform transition-transform"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-700 text-center">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Desktop layout - 2 rows with 5 and 4 items */}
        <div className="hidden md:block space-y-6">
          {/* First row - 5 items */}
          <div className="grid grid-cols-5 gap-6">
            {skills.slice(0, 5).map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center group hover:scale-105 transform transition-transform"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-700 text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>

          {/* Second row - 4 items centered */}
          <div className="grid grid-cols-4 gap-6 max-w-4xl mx-auto">
            {skills.slice(5).map((skill, index) => (
              <div
                key={index + 5}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center group hover:scale-105 transform transition-transform"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-700 text-center">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
