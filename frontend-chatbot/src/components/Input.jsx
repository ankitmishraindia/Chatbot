import { CgAttachment } from "react-icons/cg";
import { IoMdMic,IoMdSend } from "react-icons/io";

function Input(){

    return(
        <div className="w-full flex items-center p-2 text-white justify-between border rounded-xl">
        <CgAttachment size={15}/>
        <input type="text" placeholder="Send a message.." className="bg-transparent outline-none w-[90%]"/>
        <div className="flex items-center gap-2">
            <IoMdMic size={18}/>
            <IoMdSend size={22} className="cursor-pointer"/>
        </div>
    </div>
    )
}

export default Input;