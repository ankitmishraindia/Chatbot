
// eslint-disable-next-line react/prop-types
function Message({role,content,time}){
             
      const date=new Date(time)

      //define time
      const options = {  month: 'short',  hour: 'numeric', minute: 'numeric',day:'numeric' };
      const formattedDate = date.toLocaleString(undefined, options);
    return(
        <div className={`space-y-1 max-w-[70%] ${(role==='bot')?'self-end':'self-start'}`}>
            <div className={`text-[var(--text-second)] text-sm flex ${(role==='bot')?'justify-end':'justify-start'}`}>{formattedDate}</div>
            <div className="w-full flex justify-end p-1 px-2 bg-[var(--sidebar-color)] text-white rounded-xl">
                <p className="">{content}</p>
            </div>
        </div>
    )
}

export default Message;