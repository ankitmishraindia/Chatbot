
import OpenAI from 'openai'
import Conversation from '../Models/chatbotModel.js';

//getting context for user message
export const getContext=async(req,res)=>{
    try {
          const {findContext}=req.body;
          if(!findContext){
            throw new Error("find context user message can not be empty")
          }
          const openai=new OpenAI({apiKey:process.env.OPENAPI_KEY})
          const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
            {"role": "user", "content": findContext}],
            
          });

          res.status(200).json({
            message:'Success',
            Data: response.choices[0]
          })
    } catch (error) {
        res.status(500).json({
            message:error.message,
            Success:'failed'
          })
    }
}

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
export const getResponse=async (req,res)=>{
    try {
        const {context,userMessage}=req.body;
        if(!context || !userMessage){
            throw new Error("Context or userMessage is empty")
        }
       //get response from openapi
       const openai=new OpenAI({apiKey:process.env.OPENAPI_KEY})
       const response = await openai.chat.completions.create({
         model: "gpt-3.5-turbo",
         messages: [
         {"role": "user", "content": userMessage}],
         
       });

       //save data to mongodb atlas
       const conversation = await Conversation.findOneAndUpdate(
        { context },
        {
          $push: {
            messages: {
              role: 'user',
              content: userMessage,
            },
            messages: {
              role: 'bot',
              content: response.choices[0].message.content,
            },
          },
        })

        if(!conversation){
            const newConversation = await Conversation.create(
                { context },
                {
                  $push: {
                    messages: {
                      role: 'user',
                      content: userMessage,
                    },
                    messages: {
                      role: 'bot',
                      content: response.choices[0].message.content,
                    },
                  },
                })

               return res.status(200).json({
                    Success:true,
                    Data:response.choices[0],
                    newConversation
                  })
        }

       res.status(200).json({
         Success:true,
         Data:response.choices[0],
         conversation
       })
    } catch (error) {
        res.status(500).json({
            message:error.message,
            Success:'failed'
          })
    }
}

