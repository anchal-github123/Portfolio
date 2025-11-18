import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-6">
      <div className="max-w-6xl mx-auto px-6 flex justify-center gap-6 text-2xl">
        <a href="https://github.com/anchal-github123" target="_blank" rel="noreferrer">
          <FaGithub className="hover:text-white transition" />
        </a>
        <a href="https://www.linkedin.com/in/anchal--nayak/" target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:text-white transition" />
        </a>
       
        <a href="mailto:anchalnayak2003@gmail.com">
          <FaEnvelope className="hover:text-white transition" />
        </a>
      </div>
    </footer>
  );
}
