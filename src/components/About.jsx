import collageImage from "/images/Collage.jpg";

export default function About() {
  return (
    <section className="w-full px-4 py-8 mx-auto">
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg p-6 space-y-4">
        <header className="text-2xl font-bold text-gray-800 text-center mb-4">
          About Me
        </header>
        <div className="flex justify-center mb-4">
          <img
            src={collageImage}
            className="w-48 h-48 rounded-lg object-cover shadow-md"
            alt="William Jijon - Collage"
          />
        </div>{" "}
        <div className="text-gray-700 text-sm leading-relaxed space-y-3">
          <p>
            I'm William Jijon, a Computer Science student at Farmingdale State
            College with a passion for software engineering, full-stack
            development, and problem-solving through code.
          </p>

          <p>
            I've gained hands-on experience building applications with Java,
            Python, JavaScript, React, Tailwind CSS, and SQL, and have developed
            projects that integrate real-time communication, APIs, and cloud
            services.
          </p>

          <p>
            Through internships and programs like SEO Tech Developer, I've
            strengthened my technical depth in both frontend and backend
            development while working in collaborative, agile environments.
          </p>

          <p>
            I enjoy learning new technologies, tackling challenging problems,
            and creating applications that are both impactful and user-focused.
          </p>
        </div>
      </div>
    </section>
  );
}
