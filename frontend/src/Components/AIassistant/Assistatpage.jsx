  import { BiSolidMessageDots } from "react-icons/bi";
import { useState } from "react";
import ChatPopup from "./ChatPopup";
export default function Assistatpage() {
  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="text-4xl z-50 fixed bottom-12 right-5 bg-blue-700 rounded-full p-3" onClick={() => setOpen(true)}>
    <BiSolidMessageDots />
   </div>

   {/* Popup */}
      {open && <ChatPopup onClose={() => setOpen(false)} />}

</>
  )
}

