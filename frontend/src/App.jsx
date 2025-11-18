import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home"



export default function App() {
  return (
    <>
    <div className="max-w-7xl m-auto p-2">
    <Navbar></Navbar>
    <Home/>
   </div>
    <Footer/>
    </>
  )
}
