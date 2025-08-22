export default function Experience() {
  const experiences = [
    {
      name: "Tech Developer Intern",
      company: "SEO (Sponsors for Educational Opportunity)",
      location: "Remote",
      time: "June 2025 - August 2025",
      description: [
        "Gained hands-on software engineering experience by designing, testing, and deploying full-stack web apps in SCRUM-like teams using Python (Flask), MySQL, and JavaScript with API integrations.",
        "Completed 300+ hours of technical training and solved 100+ DSA problems, sharpening problem-solving skills and technical depth across backend and frontend tools.",
        "Led development of 2 full-stack projects, boosting deployment speed by 30% through the use of automated CI/CD pipelines and streamlined version control.",
      ],
      image_path: "/images/seo_logo.jpg",
    },
  ];

  return (
    <section className="w-full px-4 py-12 mx-auto min-h-screen flex items-center">
      <div className="max-w-sm mx-auto md:max-w-6xl bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600">
            My professional journey and key accomplishments
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-slate-400 rounded-lg p-6 shadow-lg">
              {/* Company Logo */}
              {experience.image_path && (
                <div className="flex justify-center mb-4">
                  <img
                    src={experience.image_path}
                    alt={`${experience.company} logo`}
                    className="w-16 h-16 object-contain rounded-lg"
                  />
                </div>
              )}

              {/* Job Title and Company */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {experience.name}
                </h3>
                <p className="text-slate-100 font-medium mb-1">
                  {experience.company}
                </p>
                <p className="text-slate-200 text-sm mb-1">
                  {experience.location}
                </p>
                <p className="text-slate-200 text-sm font-medium">
                  {experience.time}
                </p>
              </div>

              {/* Description */}
              <div className="space-y-3">
                {experience.description.map((item, idx) => (
                  <div key={idx} className="flex items-start">
                    <span className="text-white mr-3 mt-1.5 flex-shrink-0">
                      •
                    </span>
                    <p className="text-slate-100 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
