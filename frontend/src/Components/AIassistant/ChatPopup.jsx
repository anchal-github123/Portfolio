import { useState } from "react";

export default function ChatPopup({ onClose }) {
  const [userdata,setuserdata]=useState("")
  const [question,setQuestion]=useState([])
  const [isloading,setIsloading]=useState(false)

const API_URL = import.meta.env.VITE_API_URL;

async function handelFormdata(e){
  e.preventDefault();
  setIsloading(true)

// push all the Question into the array
  setQuestion((prev)=>[...prev,{sender:"user",text:userdata}])
// Empty the input box
  setuserdata("")

// send to backend
try{
const res=await fetch(`${API_URL}/ask`,{
  method:"POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: userdata }),
})

const data=await res.json()
  
  setQuestion(prev => [...prev, { sender: "bot", text:data.text}]);
  setIsloading(false)

}
catch(error){
  console.log(error)
}
   
}
function handelInputData(e){
 setuserdata(e.target.value)
}

 return (
    <div className="fixed bottom-24 right-6 w-80 h-96 bg-white shadow-2xl rounded-xl border border-gray-300 z-50 flex flex-col animate-[fadeIn_0.3s]">

      {/* Header */}
      <div className="flex justify-between items-center p-3 border-b">
        <h2 className="font-bold text-gray-800">AI Assistant 🤖</h2>
        <button onClick={onClose} className="text-gray-600 text-lg font-bold">
          ×
        </button>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-3 text-sm text-gray-800">
      <div className="flex flex-col gap-2 w-fit">
        <p className="bg-gray-200 p-2 rounded-lg inline-block">
          Hello! How can I help you today? 😊
        </p>
       {
           question.map((q,ind)=>{
     return <p key={ind}   className={`
    p-2 
    rounded-lg 
    inline-block 
    w-fit
    ${q.sender === "user" ? "bg-gray-200" : "bg-sky-200"} `}>{q.text}</p>
            
            }) }
        </div>
    </div>

      {/* Input */}
      <div className="p-3 border-t ">
      <form onSubmit={handelFormdata} className="flex gap-1">
        <input
          type="text"
          placeholder="Ask anything..."
          name="userinput"
          value={userdata}
        
          onChange={(e)=>handelInputData(e)}
          className="flex-1 border-blue-600 rounded p-2 text-sm bg-blue-200 text-black"
        />
<input
  type="submit"
  value={isloading ? "Sending..." : "Send"}
  disabled={isloading}
  className="
    bg-blue-600 
    text-white 
    px-3 
    py-2 
    rounded 
    text-sm 
    transition 
    disabled:bg-blue-300 
    disabled:cursor-not-allowed 
    disabled:opacity-70
  "
/>
</form>
      </div>

    </div>
  );
}
 