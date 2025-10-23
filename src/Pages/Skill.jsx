import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs, FaGitAlt, FaWordpress } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiFigma ,SiRedux} from "react-icons/si";

export default function Skill() {
  const techs = [
    { name: "React", icon: <FaReact size={24} className="text-sky-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss size={24} className="text-teal-400" /> },
    { name: "JavaScript", icon: <SiJavascript size={24} className="text-yellow-400" /> },
    { name: "Git", icon: <FaGitAlt size={24} className="text-red-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={24} className="text-blue-500" /> },
    { name: "HTML", icon: <FaHtml5 size={24} className="text-orange-500" /> },
    { name: "Node.js", icon: <FaNodeJs size={24} className="text-green-500" /> },
    { name: "Figma", icon: <SiFigma size={24} className="text-pink-500" /> },
    { name: "WordPress", icon: <FaWordpress size={24} className="text-indigo-500" /> },
     { name: "Redux", icon: <SiRedux size={24} className="text-purple-600" /> },
  ];


  return (
    <section className="py-10 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white rounded-2xl" id="Skill">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8">My TechStack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-[#0f172a] border border-gray-700 hover:border-blue-500 hover:scale-105 transition"
            >
              {tech.icon}
              <p className="mt-2 text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
