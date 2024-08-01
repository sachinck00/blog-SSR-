import express from 'express'
import router from './routes/staticRoutes.js'
import postRouters from "./routes/postRoters.js"
import addBlogRouter from './routes/addBlogRoute.js'
import { configDotenv } from 'dotenv'
import connectToDatabase from './database/connectToDB.js'
import path from "path"
import cookieParser from 'cookie-parser'
import checkForAuthUserCookie from './middlewares/checkForAuth.js'

const app = express()

//configure the environment variables
configDotenv()
const port = process.env.PORT
const databaseURL = process.env.DB_URL

//MongoDB connection
connectToDatabase(databaseURL)

//set th template engine ejs  
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))


//middlewares
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser())
app.use(checkForAuthUserCookie()) //for all routes check for valid token in cookie


app.use(express.static('public'))



//routes
app.use('/', router)
app.use('/users', postRouters)
app.use('/blog', addBlogRouter)


app.listen(port, ( ) => console.log(`server running on port ${port}`))
