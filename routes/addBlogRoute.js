import express from 'express'
import { handleBlogsController , handleComments} from '../controllers/postRouteControllers.js'


import upload from '../services/uploadFileUsingMulter.js'

const addBlogRouter = express.Router()

addBlogRouter.post("/addblog", upload.single("coverImage") , handleBlogsController)

addBlogRouter.post("/comments/:blogid", handleComments)




export default addBlogRouter