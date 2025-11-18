import { Menu, Linkedin, Github, User } from "lucide-react";
import logo from "../../assets/Icons/logo.svg"
import MobileNav from "./MobileNav";
export default function Navbar() {
  // navitems
const navdata=[
  {link:"Home",path:"#hero"},
  {link:"Skill",path:"#Skill"},
  {link:"Experience",path:"#Experience"},
  {link:"Projects",path:"#Projects"},]
// socialMedia items
const socialmedia=[
  {link:<Github/>,path:"https://github.com/anchal-github123"},
  {link:<Linkedin></Linkedin>,path:"https://www.linkedin.com/in/anchal--nayak/"}
]
  return (
   <header className="grid grid-cols-2 lg:grid-cols-3 items-center mt-2 z-30">
  {/* logo */}
  <div className="text-xl  flex items-center">
    <h2 className="flex gap-1 items-center justify-center">
    <img src={logo} alt="logo " className="h-10 w-10 "></img>
    <span>Anchal</span>
    </h2>
  </div>

  {/* main nav items (center only for lg) */}
  <nav className="hidden lg:flex items-center justify-center">
    <ul className="flex items-center gap-12">
      {navdata.map((item) => (
        <li key={item.link}>
          <a href={item.path}>{item.link}</a>
        </li>
      ))}
    </ul>
  </nav>

  {/* right side nav items (desktop) */}
  <div className="hidden lg:flex gap-4 items-center justify-end">
    <div className="flex gap-2">
      {socialmedia.map((item) => (
        <a key={item.path} href={item.path}>
          {item.link}
        </a>
      ))}
    </div>
    <div className="p-2 backdrop-blur-sm bg-white  text-[#0a192f]  px-4 py-2 rounded-lg text-center hover:bg-[#0a192f]  hover:text-white ">
      <a  href="/Anchal_Resume.pdf" className="font-semibold">Download CV</a>
    </div>
  </div>

  {/* mobile nav (inside col 2 on small screens) */}
  <div className="flex justify-end lg:hidden">
    <MobileNav navdata={navdata} socialmedia={socialmedia} />
  </div>
</header>

  )
}
