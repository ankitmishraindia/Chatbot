import { MdChatBubbleOutline } from "react-icons/md";

// eslint-disable-next-line react/prop-types
function ChatLink({title}){

    return(
        <div className="flex gap-2 items-center bg-[var(--sidebar-color)] w-full rounded-3xl px-3 py-2 border border-[var(--active)] cursor-pointer">
        <MdChatBubbleOutline className="text-white" size={22}/>
        <span className="text-[var(--text-second)]">{title}</span>
    </div>
    )
}

export default ChatLink;