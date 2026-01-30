import { LinkOutlined } from "@ant-design/icons";

interface ExperienceItem {
  company: string;
  companyLink?: string;
  position: string;
  date: string;
  teamSize?: string;
  description: string;
  responsibilities: string[];
  technologies?: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Cohost AI",
    companyLink: "#",
    position: "Front-end Developer (Leader)",
    date: "03/2024 – Now",
    teamSize: "5",
    description: 'Cohost AI is created by an Airbnb Host, who deeply understands the problems that Micro Entrepreneurs face daily. We want to leverage technology to help 1 million micro-entrepreneurs and micro-businesses thrive by 2030.',
    responsibilities: [
      "Clarify requirements with superiors, analyze and divide tasks for the team.",
      "Build and develop projects with ReactJS, NextJS, TypeScript Tailwind, Shadcn/ui, SASS, Material UI.",
      "Plan weekly work and assign tasks to team members.",
      "Host daily and weekly team meetings and report work to supervisors.",
      "Review Pull Request and Merge Code.",
      "Suggest solutions to solve problems and optimization code for the whole team (Front-end + Back-end)"
    ]
  },
  {
    company: "Pod Foods",
    companyLink: "#",
    position: "Front-end Developer",
    date: "10/2019 – 03/2024",
    teamSize: "15",
    description: 'Pod Foods a software and data-enabled distribution and logistics platform designed to efficiently bring emerging food brands to retailers across the nation.',
    responsibilities: [
      "Adapts well to tech stack changes. Deliver tasks consistently on time.",
      "I am always ready confident in dealing with technological changes and I am willing to learn new skills to",
      "I'm responsible for developing websites with ReactJS, VueJS, NuxtJS, and other technologies."
    ],
    technologies: "ReactJS, VueJS, NuxtJS"
  }
];

export default function ExperiencePage() {
  return (
    <div className="mt-12">
      {/* Separator Line */}
      <div className="border-t-2 border-gray-300 my-8"></div>

      {/* Title */}
      <h2 className="text-3xl font-bold mb-8">Experience</h2>

      {/* Experience Items */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8">
            {/* Company Header */}
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-2xl font-bold text-teal-600 flex items-center gap-2">
                  {exp.company}
                  {exp.companyLink && <LinkOutlined className="text-lg" />}
                </h3>
                <p className="text-lg text-gray-700">{exp.position}</p>
              </div>
              <p className="text-right text-lg font-semibold text-teal-600">{exp.date}</p>
            </div>

            {/* Team Size */}
            {exp.teamSize && (
              <p className="text-orange-500 font-bold mb-2">
                ■ {exp.company} (Team size: {exp.teamSize})
              </p>
            )}

            {/* Description */}
            <p className="text-gray-700 mb-4">
              <span className="font-semibold text-black">• {exp.description}</span>
            </p>

            {/* Responsibilities */}
            <ul className="space-y-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex gap-3 text-gray-700">
                  <span className="text-orange-400 text-lg flex-shrink-0">■</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
