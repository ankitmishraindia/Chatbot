import { MdOutlineAddCircleOutline } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import ChatLink from "./ChatLink";

function PreviousChats(){

    return(
        <div className="w-[20%] h-full flex flex-col justify-between px-6 py-4">
        <div>
                <h2 className="font-semibold text-white text-2xl ">Text Generator</h2>
                <div className="space-y-2 mt-5 ">
                    
                    <ChatLink title="This is backup chat"/>
                </div>
        </div>
        <div className="space-y-2">
                <div className="flex gap-2 items-center  w-full rounded-3xl px-3 py-2 text-[var(--active)] border border-[var(--active)]">
                        <MdOutlineAddCircleOutline  size={22}/>
                        <span >New Chat</span>
                </div>
                <div className="flex gap-2 items-center  w-full rounded-3xl px-3 py-2 text-red-400 border border-red-400">
                        <FaRegWindowClose  size={22}/>
                        <span >Clear conversation</span>
                </div>
        </div>
        
    </div>
    )
}

export default PreviousChats;