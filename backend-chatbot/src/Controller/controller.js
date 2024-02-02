
import OpenAI from 'openai'
import Conversation from '../Models/chatbotModel.js';



//find all conversation of previous chats
export const previousConversations=async(req,res)=>{
    try {
          const conversations=await Conversation.find({})
          if(!conversations){
            throw new Error("No conversations")
          }

          res.status(200).json({
            message:'Success',
            conversations
          })
    } catch (error) {
        res.status(500).json({
            message:error.message,
            Success:'failed'
          })
    }
}

//find replies of user messages
export const updateChats=async (req,res)=>{
    try {
        let {context,userMessage}=req.body;
        if(!context || !userMessage){
            throw new Error("Context or userMessage is empty")
        }
        //set instance of openapi
        const openai=new OpenAI({apiKey:process.env.OPENAPI_KEY}) 

        //find context for new chat
        if(context==='New Chat'){
          
          const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
            {"role": "user", "content": `Find the title of given text group maximun in five words: ${userMessage}`}],
            
          });
          context=response.choices[0].message.content;
        }
       //get response from openapi
       
       const response = await openai.chat.completions.create({
         model: "gpt-3.5-turbo",
         messages: [
         {"role": "user", "content": userMessage}],
         
       });

       //save data to mongodb atlas
       let conversation=await Conversation.findOne({context})

       if(!conversation){
          conversation= new Conversation({context,messages:[]})
       }

       //add usermessage to messages
       conversation.messages.push({role:'user',content:userMessage})

       //add bot respose to messages
       conversation.messages.push({role:'bot',content:response.choices[0].message.content})
       conversation.save();
       res.status(200).json({
         Success:true,
         Data:response.choices[0],
         updated:conversation
       })
    } catch (error) {
       console.log(error.stack)
        res.status(500).json({
            message:error.message,
            Success:'failed'
          })
    }
}

//delete chats
export const removeChat=async function(req,res,next){
  try {
     const { context }=req.query;
     if(!context){
      throw new Error('Context not found')
     }
     const conversation=await Conversation.findOneAndDelete({context})
     if(!conversation)
     {
       throw new Error("Could not find converstation for delete")
     }
     res.status(200).json({
       Success:true,
       message:'conversation deleted successfully',
       conversation
     })
  } catch (error) {
    console.log(error.stack)
        res.status(500).json({
            message:error.message,
            Success:'failed'
          })
  }
 
 }

