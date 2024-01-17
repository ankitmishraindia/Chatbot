import { BiLogoDribbble } from "react-icons/bi";
import { AiOutlineAppstore } from "react-icons/ai";
import { FaArrowTrendUp,FaRegBookmark,FaArrowRightFromBracket } from "react-icons/fa6";
import { MdChatBubbleOutline,MdOutlineNotifications } from "react-icons/md";
import { GoImage } from "react-icons/go";
import { LuMusic } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import navImage from './assets/logo-image.png'
import ChatContainer from "./components/ChatContainer";
import {  useAppState } from "./myContext";
import axios from "axios";
import { useEffect } from "react";




function App() {
  
  const {chatData,setChatData}=useAppState()

  useEffect(
    ()=>{
            async function getData(){
            try {
                    const res=await axios.get('http://localhost:7000/chatbot/oldChats')

                   setChatData((state)=>({...state,
                                 oldChats:res.data.conversations.reverse(),
                                 messageData:res.data.conversations[0].messages,
                                context:res.data.conversations[0].context}))
             console.log(res.data.conversations[0])
             
            } catch (error) {
                    console.log(error.message)
            }      
         }
         getData()
      }
    ,[]
)
 
useEffect(() => {
  // Check if chatData.messageData is not null or undefined before logging
  if (chatData.messageData) {
    console.log("messageData changed:");
    // You can add additional logic or side effects here
  }
}, [chatData.messageData]);




  return (
    
      <div className="w-full h-full relative">
        {/* *****************Sidebar********************* */}
        <div className="fixed left-0 w-20 h-full z-10 bg-[var(--sidebar-color)] py-6 text-white  flex flex-col items-center gap-24">
          <div>
             <span><BiLogoDribbble className="text-blue-500" size={44}/></span>
             <span>LOGO</span>
          </div>
          <div className="flex flex-col space-y-7">
            <AiOutlineAppstore size={22}/>
            <FaArrowTrendUp size={22}/>
            <MdChatBubbleOutline className="text-[var(--active)]" size={22}/>
            <GoImage size={22}/>
            <LuMusic size={22}/>
            <FaRegBookmark size={22}/>
            <FaArrowRightFromBracket size={22}/>
            
          </div>
        </div> 
        {/************************* navbar *****************************/}
        <div className="h-[8vh] w-full bg-[var(--navbar-color)] pl-[40%] pr-5">
           <div className="flex h-full w-full items-center justify-between">
             <div className="flex gap-3 p-1 px-3 bg-[var(--sidebar-color)] rounded-3xl border border-[var(--text-second)]">
              <input type="text" placeholder="Search anything..." className="bg-transparent outline-none " />
              <IoSearch size={22} className="text-[var(--text-second)]"/>
             </div>
             <div className="flex text-white gap-5">
                <div className="relative">
                   <MdOutlineNotifications size={22}/>
                   <div className="absolute top-0 right-1 w-2 h-2 bg-[var(--active)] rounded-full"></div>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={navImage} alt="navimage" className="w-6 h-6 rounded-full "/>
                  <IoIosArrowDown size={22}/>
                </div>
             </div>
           </div>
        </div>
        {/* ******************Chat Container************************* */}
        <ChatContainer/>
      </div>
       
  )
}

export default App
