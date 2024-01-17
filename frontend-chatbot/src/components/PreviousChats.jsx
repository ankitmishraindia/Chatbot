import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import ChatLink from "./ChatLink";

import  { useAppState } from "../myContext";
import axios from "axios";



function PreviousChats(){
          
        const { chatData,setChatData } = useAppState()
        

        //function for new chat
        async function newChat(){
                setChatData((state)=>({...state,
                        messageData:[],
                       context:'New Chat'}))
                       console.log('successfully new chat clicked')
        }

        //delte chat 
        async function delChat(){
                console.log("context is:",chatData.context)
                const res=await axios.delete(`http://localhost:7000/chatbot/deleteChats?context=${chatData.context}`)
                console.log(res.data)
                setChatData((state)=>({...state,
                        oldChats:state.oldChats.filter((item)=>item.context!==res.data.conversation.context),
                        messageData:[],
                       context:'New Chat'}))
                       console.log('successfully delete clicked')
        }

        

    return(
        <div className="w-[20%] h-full flex flex-col justify-between px-6 py-4">
        <div>
                <h2 className="font-semibold text-white text-2xl ">Text Generator</h2>
                <div className="space-y-2 mt-5 overflow-x-hidden overflow-y-auto" >
                   {chatData.oldChats&&
                   chatData.oldChats.map((item,index)=><ChatLink borderg={(index===0)?'border border-[var(--active)]':''} key={item._id} title={item.context}/>
                   
                   )} 
                    
                </div>
        </div>
        <div className="space-y-2">
                <div className="flex gap-2 items-center cursor-pointer w-full rounded-3xl px-3 py-2 text-[var(--active)] border border-[var(--active)]" onClick={newChat}>
                        <MdOutlineAddCircleOutline  size={22}/>
                        <span >New Chat</span>
                </div>
                <div className="flex gap-2 items-center cursor-pointer w-full rounded-3xl px-3 py-2 text-red-400 border border-red-400" onClick={delChat}>
                        <FaRegWindowClose  size={22}/>
                        <span >Clear conversation</span>
                </div>
        </div>
        
    </div>
    )
}

export default PreviousChats;