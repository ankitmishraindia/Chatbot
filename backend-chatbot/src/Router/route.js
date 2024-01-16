import {Router} from 'express'
import { getContext, getResponse, previousConversations } from '../Controller/controller.js'


const router=Router()

router.get('/context',getContext)

router.get('/oldChats',previousConversations)

router.post('/findRes',getResponse)

export default router;