import axios from "axios";
import { useState } from "react";
import { CgAttachment } from "react-icons/cg";
import { IoMdMic,IoMdSend } from "react-icons/io";
import  { useAppState } from "../myContext";

// eslint-disable-next-line react/prop-types
function Input(){
     
          const [inputValue,setInputValue]=useState('')
          const {chatData,setChatData}=useAppState()
       
         async function handleClick(){
            if(!inputValue){
                window.alert("Please enter query..")
                return;
            } 
            setChatData((prevChatData) => ({
                ...prevChatData,
                messageData: [
                  ...prevChatData.messageData,
                  { role: 'user', content: inputValue, _id: new Date(), timestamp: new Date() },
                ],
              }));
                const res=await axios.post('http://localhost:7000/chatbot/updateChats',{context:chatData.context,userMessage:inputValue})
            setInputValue('')
            setChatData((prevChatData) => ({
                ...prevChatData,
                oldChats:[res.data.updated,...prevChatData.oldChats],
                messageData: 
                  res.data.updated.messages
                ,
                context:res.data.updated.context
              }));
           
          }
        
    return(
        <div className="w-full flex items-center p-2 text-white justify-between border rounded-xl">
        <CgAttachment size={15}/>
        <input 
        type="text" 
        placeholder="Send a message.." 
        value={inputValue}
        onChange={e=>setInputValue(e.target.value)}
        className="bg-transparent outline-none w-[90%]" 

        required/>
        <div className="flex items-center gap-2">
            <IoMdMic size={18}/>
            <IoMdSend size={22} className="cursor-pointer" onClick={handleClick}/>
        </div>
    </div>
    )
}

export default Input;