import collageImage from "/images/Collage.jpg";

export default function About() {
  return (
    <section className="w-full px-4 py-12 mx-auto min-h-screen flex items-center">
      <div className="max-w-sm mx-auto md:max-w-6xl bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6 w-full">
        <header className="text-3xl font-bold text-gray-800 text-center mb-6 md:mb-8">
          About Me
        </header>

        {/* Mobile layout - stacked vertically */}
        <div className="md:hidden">
          <div className="flex justify-center mb-4">
            <img
              src={collageImage}
              className="w-48 h-48 rounded-lg object-cover shadow-md"
              alt="William Jijon - Collage"
            />
          </div>
          <div className="text-gray-700 text-sm leading-relaxed space-y-3">
            <p>
              I'm William Jijon, a Computer Science student at Farmingdale State
              College with a passion for software engineering, full-stack
              development, and problem-solving through code.
            </p>

            <p>
              I've gained hands-on experience building applications with Java,
              Python, JavaScript, React, Tailwind CSS, and SQL, and have
              developed projects that integrate real-time communication, APIs,
              and cloud services.
            </p>

            <p>
              Through internships and programs like SEO Tech Developer, I've
              strengthened my technical depth in both frontend and backend
              development while working in collaborative, agile environments.
            </p>

            <p>
              I enjoy learning new technologies, tackling challenging problems,
              and creating applications that are both impactful and
              user-focused.
            </p>
          </div>
        </div>

        {/* Desktop layout - side by side */}
        <div className="hidden md:flex md:gap-8 md:items-center">
          {/* Left side - Image (50%) */}
          <div className="md:w-1/2">
            <img
              src={collageImage}
              className="w-full h-auto rounded-lg object-cover shadow-md"
              alt="William Jijon - Collage"
            />
          </div>

          {/* Right side - Text content (50%) */}
          <div className="md:w-1/2 text-gray-700 text-base leading-relaxed space-y-4">
            <p>
              I'm William Jijon, a Computer Science student at Farmingdale State
              College with a passion for software engineering, full-stack
              development, and problem-solving through code.
            </p>

            <p>
              I've gained hands-on experience building applications with Java,
              Python, JavaScript, React, Tailwind CSS, and SQL, and have
              developed projects that integrate real-time communication, APIs,
              and cloud services.
            </p>

            <p>
              Through internships and programs like SEO Tech Developer, I've
              strengthened my technical depth in both frontend and backend
              development while working in collaborative, agile environments.
            </p>

            <p>
              I enjoy learning new technologies, tackling challenging problems,
              and creating applications that are both impactful and
              user-focused.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
