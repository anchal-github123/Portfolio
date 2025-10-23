import React from "react";

import stackneuromockup from "../assets/Logo&Mockups/1.png";
import stackneurlogo from "../assets/Logo&Mockups/2.png";
import swadeshacademylogo from "../assets/Logo&Mockups/3.png";
import swadeshacademymockup from "../assets/Logo&Mockups/4.png";
import ngologo from "../assets/Logo&Mockups/5.png";
import ngomocukups from "../assets/Logo&Mockups/6.png";
import jfcmockup from "../assets/Logo&Mockups/7.png";
import jfclogo from "../assets/Logo&Mockups/8.png";

const logoProjects = [
  {
    id: 1,
    name: "Stack Neuro",
    description:
      "Modern, minimal logo and mockup for Stack Neuro — a tech company focused on web and digital solutions.",
    logo: stackneurlogo,
    mockup: stackneuromockup,
  },
  {
    id: 2,
    name: "Swadesh Academy",
    description:
      "Professional educational logo design and promotional mockup for Swadesh Academy — representing growth and learning.",
    logo: swadeshacademylogo,
    mockup: swadeshacademymockup,
  },
  {
    id: 3,
    name: "Olly Bagan Socio Economy Development Trust (NGO)",
    description:
      "Logo and visual identity for an NGO helping underprivileged communities — earthy tones and human-centered design.",
    logo: ngologo,
    mockup: ngomocukups,
  },
  {
    id: 4,
    name: "JFC Fast Food Stall",
    description:
      "Creative and appetizing logo design with mockup for JFC — a fast food stall offering non-veg and street-style dishes.",
    logo: jfclogo,
    mockup: jfcmockup,
  },
];

export default function Logo() {
  return (
    <div className="max-w-6xl mx-auto px-4 mt-16 text-white">
      {/* Section Title */}
      <h3 className="text-3xl font-bold mb-8 border-l-4 border-purple-500 pl-3">
        Logo Designs
      </h3>

      {/* Grid Layout */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {logoProjects.map((logo) => (
          <div
            key={logo.id}
            className="relative bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-purple-600/30 transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* Hover Image Swap (mockup → logo) */}
            <div className="relative group">
              {/* Show mockup by default */}
              <img
                src={logo.mockup}
                alt={logo.name}
                className="w-full h-56 object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              {/* Show logo on hover */}
              <img
                src={logo.logo}
                alt={`${logo.name} logo`}
                className="absolute inset-0 w-full h-56 object-contain p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60"
              />
            </div>

            {/* Card Details */}
            <div className="p-5">
              <span className="inline-block bg-purple-600 text-xs px-3 py-1 rounded-full mb-2">
                Logo Design
              </span>
              <h3 className="text-xl font-semibold mb-2">{logo.name}</h3>
              <p className="text-gray-200 text-sm mb-4">{logo.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
