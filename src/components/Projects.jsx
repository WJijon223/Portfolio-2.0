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
        "Created an award-winning video call platform that translates conversations in 80+ languages with real-time transcripts and personalized voice cloning. Leveraged WebRTC, Socket.IO, and Supabase for secure, low-latency calls, cutting translation delays by 25% and enhancing user experience.",
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
        "Built a location-based trend explorer with React and Mapbox that visualizes real-time topics by region. Integrated Reddit API and Supabase for personalized feeds and authentication, with unit testing and CI/CD pipelines ensuring reliable deployments.",
      time: "July 2025",
      link: "https://github.com/WJijon223/geotrend",
      imagePath: "/images/projects/geoTrend.png",
    },
    {
      name: "CookBot",
      techStack: ["Python", "Spoonacular API", "Google Gemini API"],
      description:
        "Built a terminal-based cooking assistant in Python that suggests recipes from user-inputted ingredients via the Spoonacular API and enhances them with AI-generated step-by-step instructions, tips, and variations using the Gemini API.",
      time: "June 2025",
      link: "https://github.com/WJijon223/cookbot",
      imagePath: "/images/projects/cookbot.PNG",
    },
    {
      name: "Juicy Bytes",
      techStack: ["React", "Tailwind CSS", "FruityVice API"],
      description:
        "Created a fruit information web app with React and Tailwind CSS that lets users search and explore fruits, view detailed nutrition data, and use interactive features like a searchable sidebar and nutrition calculator.",
      time: "May 2025",
      link: "https://github.com/WJijon223/juicy-bytes",
      imagePath: "/images/projects/juicyBytes.PNG",
    },
    {
      name: "24 Card Game",
      techStack: ["Java", "JavaFX", "OpenAI API"],
      description:
        "Developed an interactive math card game in Java with JavaFX where players use drawn cards to reach 24. Incorporated the OpenAI API to generate smart hints and applied the MVC design pattern to keep logic and UI clean, scalable, and easy to maintain.",
      time: "February 2025",
      link: "https://github.com/WJijon223/24-card-game",
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
    <section className="w-full px-4 py-12 mx-auto min-h-screen flex items-center">
      <div className="max-w-sm mx-auto bg-slate-400 rounded-2xl shadow-lg p-8 space-y-6 w-full">
        <h2 className="text-white text-3xl font-bold text-center mb-8">
          Projects
        </h2>
        <div className="space-y-6">
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
      </div>
    </section>
  );
}
