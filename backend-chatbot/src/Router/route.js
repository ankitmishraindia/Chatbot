import {Router} from 'express'
import { updateChats, previousConversations, removeChat } from '../Controller/controller.js'


const router=Router()



router.get('/oldChats',previousConversations)

router.post('/updateChats',updateChats)

router.delete('/deleteChats',removeChat)



export default router;