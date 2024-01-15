
// eslint-disable-next-line react/prop-types
function Message({isbot}){

    return(
        <div className={`space-y-1 max-w-[70%] ${(isbot)?'self-end':'self-start'}`}>
            <div className={`text-[var(--text-second)] text-sm flex ${(isbot)?'justify-end':'justify-start'}`}>2 dec,2.30 pm</div>
            <div className="w-full flex justify-end p-1 bg-[var(--sidebar-color)] text-white rounded-xl">
                <p className="">this is my message of chatbot and accordingly this is my message of chatbot and accordingly this is my message of chatbot and accordingly</p>
            </div>
        </div>
    )
}

export default Message;