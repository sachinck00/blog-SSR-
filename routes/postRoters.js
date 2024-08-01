import express from "express"
import {handleLogin , handleSignUp} from "../controllers/postRouteControllers.js"

const postRouters = express.Router()

postRouters.post("/signup", handleSignUp)

postRouters.post("/login", handleLogin)


export default postRouters