import express from 'express'
import { getHomePage, getLoginPage , getSignUpPage, logOutAccount, getAddBlogPage, getBlogWithId } from '../controllers/staticRouteControllers.js'
import {getAllYourBlogs} from "../controllers/staticRouteControllers.js"

const { Router } = express

const router = Router()

router.get('/' ,  getHomePage)

router.get('/login', getLoginPage)

router.get('/signup', getSignUpPage)

router.get("/logout", logOutAccount)

router.get("/addblog",  getAddBlogPage)

router.get("/blog/:id", getBlogWithId)

router.get("/yourblogs", getAllYourBlogs)



export default router