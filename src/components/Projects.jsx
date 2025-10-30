export default function Projects() {
  const projects = [
    {
      name: "IntelliSpeech",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "WebRTC",
        "Socket.IO",
        "Supabase",
        "ElevenLabs",
        "Google Translate API",
      ],
      description:
        "Award-winning video call platform that delivers real-time translation across 80+ languages with transcripts and personalized voice cloning. Built with WebRTC, Socket.IO, and Supabase to ensure secure, low-latency connections and reduce translation delays.",
      time: "July 2025",
      link: "https://github.com/WJijon223/intellispeech",
      imagePath: "/images/projects/intellispeech.PNG",
    },
    {
      name: "GeoTrend",
      techStack: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Reddit API",
        "Supabase",
      ],
      description:
        "Developed a location-based trend explorer with React and Mapbox to visualize real-time topics by region. Integrated Reddit API and Supabase for personalized feeds and authentication, and implemented CI/CD pipelines to improve testing, reliability, and deployments.",
      time: "July 2025",
      link: "https://github.com/WJijon223/geotrend",
      imagePath: "/images/projects/geoTrend.png",
    },
    {
      name: "CookBot",
      techStack: ["Python", "Spoonacular API", "Google Gemini API"],
      description:
        "Built a terminal-based cooking assistant that recommends recipes from user-inputted ingredients using the Spoonacular API. Enhanced with Gemini AI to generate step-by-step instructions, substitutions, and variations, while allowing users to save and revisit their recipe history.",
      time: "June 2025",
      link: "https://github.com/WJijon223/cookbot",
      imagePath: "/images/projects/cookbot.PNG",
    },
    {
      name: "FinTrack",
      techStack: ["Java", "Spring Boot", "JavaFX", "CSS", "MySQL"],
      description:
        "Full-stack personal finance app that helps users manage budgets, track expenses, and set savings goals. Built with Spring Boot, JavaFX, and Azure MySQL for secure, cloud-based data management and seamless backend integration.",
      time: "May 2025",
      link: "https://github.com/WJijon223/FinTrack",
      imagePath: "/images/projects/fintrack.png",
    },
    {
      name: "Juicy Bytes",
      techStack: ["React", "Tailwind CSS", "FruityVice API"],
      description:
        "Created a fruit information web app with React and Tailwind CSS that lets users search and explore fruits, view detailed nutrition data, and use interactive features like a searchable sidebar and nutrition calculator.",
      time: "May 2025",
      link: "https://github.com/WJijon223/JuicyBytes",
      imagePath: "/images/projects/juicyBytes.PNG",
    },
    {
      name: "24 Card Game",
      techStack: ["Java", "JavaFX", "OpenAI API"],
      description:
        "Developed an interactive math card game in Java with JavaFX where players use drawn cards to reach 24. Incorporated the OpenAI API to generate smart hints and applied the MVC design pattern to keep logic and UI clean, scalable, and easy to maintain.",
      time: "February 2025",
      link: "https://github.com/WJijon223/CardGame-24",
      imagePath: "/images/projects/cardgame24.png",
    },
    {
      name: "Fisherman Game",
      techStack: ["Python", "Pygame"],
      description:
        "Built a 2D fishing game in Python using Pygame with player movement, spawning, and collision mechanics. Applied object-oriented design for modularity and collaborated with a teammate to integrate sprite animations, ensuring smooth gameplay and visuals.",
      time: "April 2024",
      link: "https://github.com/WJijon223/fishing-game",
      imagePath: "/images/projects/fisherman_img.png",
    },
  ];
  return (
    <section
      id="projects"
      className="w-full px-4 py-12 mx-auto min-h-screen flex items-center"
    >
      <div className="max-w-sm mx-auto md:max-w-none md:w-full md:px-8 bg-slate-400 rounded-2xl shadow-lg p-8 md:p-12 space-y-6 w-full">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-8">
          Projects
        </h2>

        {/* Mobile layout - single column */}
        <div className="space-y-6 md:hidden">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="mb-4">
                <img
                  src={project.imagePath}
                  alt={project.name}
                  className="w-full h-auto object-contain rounded-lg bg-gray-50"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-500 mb-3">{project.time}</p>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-100 text-slate-700 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-slate-400 hover:bg-slate-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                View Project
              </a>
            </div>
          ))}
        </div>

        {/* Desktop layout - 3 columns grid with horizontal cards */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-80 md:h-96"
            >
              <div className="mb-1">
                <img
                  src={project.imagePath}
                  alt={project.name}
                  className="w-full h-24 md:h-32 object-contain rounded-lg bg-gray-50"
                />
              </div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-sm md:text-lg font-semibold text-gray-800 flex-1 mr-2">
                  {project.name}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-slate-400 hover:bg-slate-500 text-white px-2 md:px-3 py-1 rounded-lg text-xs font-medium transition-colors flex-shrink-0"
                >
                  View
                </a>
              </div>
              <p className="text-xs text-gray-500 mb-1">{project.time}</p>
              <p className="text-gray-600 text-xs mb-2 leading-relaxed flex-grow overflow-hidden">
                {project.description}
              </p>
              <div className="mb-2">
                <h4 className="text-xs font-medium text-gray-700 mb-1">
                  Tech Stack:
                </h4>
                <div className="flex flex-wrap gap-1">
                  {project.techStack.slice(0, 6).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-slate-100 text-slate-700 px-1 md:px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 6 && (
                    <span className="text-xs text-gray-500">
                      +{project.techStack.length - 6}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
