import { MdChatBubbleOutline } from "react-icons/md";

// eslint-disable-next-line react/prop-types
function ChatLink({title,borderg}){

    return(
        <div className={`flex  gap-2  bg-[var(--sidebar-color)] w-full rounded-3xl px-3 py-2 ${borderg}  cursor-pointer`}>
        <MdChatBubbleOutline className="text-white" size={22}/>
        <span className="text-[var(--text-second)] overflow-hidden max-h-6 text-sm max-w-[85%]">{title}</span>
    </div>
    )
}

export default ChatLink;