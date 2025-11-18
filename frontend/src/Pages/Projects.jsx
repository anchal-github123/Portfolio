import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFigma } from "react-icons/si";
import stackneuroProject from "../assets/Stackneuro.png"
import connexBetterProject from "../assets/connexBetter.png"
import swadeshacademy from "../assets/swadeshacademy.png"
import Logo from "./Logo";
const projects = [
  {
    title: "Stackneuro",
  description: "Freelancing company website built with React, Redux, and Tailwind CSS to showcase services and projects.",
    image: stackneuroProject,
    demo: "https://stackneuro.com/",
    github: "https://github.com/anchal-github123/Stack-enuro",
    tech: [<FaReact />, <FaHtml5 />, <FaCss3Alt />,<SiTailwindcss/>,<SiFigma/>],
  },
  {
    title: "Connex Better",
    description: "Corporate website for ConnexBetter, developed using React, Node.js, and Tailwind CSS to highlight business solutions.",
    image: connexBetterProject,
    demo: "https://connexbetter.com/",
    github: "https://github.com/connexbetterwebdev12/connexwebsite",
    tech: [<FaReact />, <FaNodeJs />, <FaHtml5 />, <FaCss3Alt />,<SiTailwindcss/>],
  },
  {
    title: "Swadesh Academy",
   description: "Educational coaching website built with React and Tailwind CSS, featuring courses, admissions, and institute details.",
    image: swadeshacademy,
    demo: "https://swadeshacademy.com/",
    github: "https://github.com/anchal-github123/briliant-academy",
   tech: [<FaReact />, <FaHtml5 />, <FaCss3Alt />,<SiTailwindcss/>,<SiFigma/>],
  },
];

export default function Projects() {
  return (
    <section className="" id="Projects">
      <h2 className="text-4xl font-bold text-center mb-12 ">Projects</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="drop-shadow-2xl bg-white/15 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover p-3"
            />
            <div className="p-6">
              <span className="inline-block bg-green-600 text-white text-xs px-2 py-1 rounded-full mb-2">
    Freelancing Project
  </span>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-white mb-4">{project.description}</p>
              <div className="flex gap-2 mb-4">
                {project.tech.map((icon, i) => (
                  <span key={i} className="text-white text-xl">
                    {icon}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  target="_blank"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  className="px-3 py-1 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Logo></Logo>
    </section>
  );
}
