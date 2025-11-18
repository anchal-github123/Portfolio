import Assistatpage from "../Components/AIassistant/Assistatpage"
import Footer from "../Components/Footer"
import Experience from "./Experience"
import Heropage from "./Heropage"
import Projects from "./Projects"
import Skill from "./Skill"
export default function Home() {
  return (
    <section className="mt-5 lg:mt-2 ">
    <Heropage></Heropage>
    <Skill/>
    <Experience/>
    <Projects/>
    </section>
  )
}
