import {Menu,X} from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react"
export default function MobileNav({navdata,socialmedia}) {
    const [isopennav,setIsopennav]=useState(false);
  return (
 
      <>
      {/* hamburger Button */}
      <motion.div 
      className="relative z-20 "
      animate={{rotate:isopennav?90:0}}
      onClick={()=>setIsopennav(!isopennav)}>
      {
        isopennav?<X/>:<Menu/>
      }
      </motion.div>
      {/* Mobiule View navitems */}
      <motion.div 
      initial={{x:100}}
      animate={{x:isopennav?0:-100}}
      transition={{duration:0.3}}
      className="absolute z-30 left-0 top-15 w-full  backdrop-blur-2xl px-5  text-white bg-white/10">
        {
          isopennav&&(
            <div className="flex flex-col gap-5 py-3">
            <ul className="flex flex-col gap-5">
        {
          navdata.map((item)=><li><a href={item.path}>{item.link}</a></li>)
        }
      </ul> 

       <div className='flex flex-col gap-5'>
      <div className='flex flex-col gap-5'>
      {
        socialmedia.map((item)=><a href={item.path}>{item.link}</a>)
      }
     </div>
     <div class="p-2 bg-[#0a192f] rounded-2xl  flex items-center justify-center">
     <a href="/Anchal_Nayak_Resume.docx" class="font-semibold text-white">Download CV</a>
     </div>
     </div>
       </div>
       )}
      </motion.div>

      </>
)
}
