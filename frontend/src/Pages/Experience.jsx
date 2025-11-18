// Experience.jsx
const experiences = [
{
    role: "Freelance Frontend Developer",
    company: "",
    date: "jun 2025 — Present",
    description:
      "Built responsive websites for small businesses, optimized SEO, and implemented e-commerce solutions.",
  },
  {
    role: "Frontend Developer Intern",
    company: "ConnexBetter",
    date: "Jan 2024 — Mar 2025",
    description:
      "Developed and maintained 15+ pages using React & Tailwind CSS, integrated APIs, and improved UI/UX for clients.",
  },

  // add more experiences here as needed
];

export default function Experience() {
  return (
    <section
      id="Experience"
      className="py-20  text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12">Experience</h2>

        <div className="relative pl-6 md:pl-12">
          {/* vertical line */}
          <div className="absolute left-2 md:left-6 top-6 bottom-0 w-[2px] bg-[rgba(255,255,255,0.06)]"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* timeline dot */}
                <div
                  className="absolute -left-[10px] md:-left-[18px] top-1 w-5 h-5 md:w-6 md:h-6 rounded-full
                             bg-blue-500 ring-2 ring-[rgba(59,130,246,0.2)] shadow-[0_0_12px_rgba(59,130,246,0.12)]"
                  aria-hidden="true"
                />

                <div className="pl-3 md:pl-8">
                  <h3 className="text-xl md:text-2xl font-semibold">
                    {exp.role}
                  </h3>
                  <p className="text-sm md:text-base text-slate-400 mt-1">
                    {exp.company} • {exp.date}
                  </p>
                  <p className="mt-4 text-slate-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
