import express from 'express'
import cors from "cors";
import { main } from '../genai.js';
const app=express()


app.use(express.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("HII")
})

app.post("/ask",async (req,res)=>{

    const userMessage = req.body.message; 
    let output= await main(userMessage)
    res.json({sender:"AI",text:output})
    
  
})

// app.listen(8000,()=>{
//     console.log("server is listing")
// })
export default app;