

import { useAppState } from "../myContext";
import Input from "./Input";
import Message from "./Message";
import PreviousChats from "./PreviousChats";




function ChatContainer(){
    
   
    const {chatData}=useAppState()

   
    
    return(
        
        <div className="flex bg-[var(--main-bgcolor)] w-full h-[92vh] pl-20">
            <PreviousChats/>
            <div className="w-[80%] flex flex-col justify-between border-l border-l-[rgba(255,255,255,0.1)] h-[99%] p-8">
                <div className="flex flex-col w-full space-y-3 overflow-x-hidden overflow-y-auto m-3 p-2">
                    
                    {chatData.messageData?chatData.messageData.map((item)=><Message  key={item._id} role={item.role} content={item.content} time={item.timestamp}/>):''}
                   

                </div>
                <Input/>
            </div>

        </div>
        
    )
}
export default ChatContainer;