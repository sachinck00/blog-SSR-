import Blog from "../database/models/blogModel.js"
import Comment from "../database/models/comment.js"

const getHomePage =async ( req, res ) => {
   const blogs = await Blog.find({})
   //console.log(blogs)
   res.render("home", {
    user : req.user,
    blogs
   })
}
const getLoginPage = ( req, res ) => {
    res.render("login")
 }
const getSignUpPage = (req, res) => {
    res.render("signUp")
}

const logOutAccount = (req, res) => {
    res.clearCookie("token").redirect("/login")
}

const getAddBlogPage = (req, res) => {
   // console.log(req.user)
    res.render("addBlog", {
        user : req.user
    })
}

const getBlogWithId =async (req, res) => {
    const blogId = req.params.id
    const blog = await Blog.findById(blogId).populate("createdBy")
    const comments = await Comment.find( {toBlogId : blogId} ).populate("createdBy")
    //console.log(blog);
    //console.log("comments", comments);
    res.render('blog',{
       blog,
       user : req.user,
       comments
    })
}


const getAllYourBlogs = async (req, res) => {
     //console.log(req.user);
     const usersBlog = await Blog.find({createdBy : req.user._id})
     //console.log(usersBlog);
      res.render("curUserBlogs", {
        user : req.user,
        usersBlog
     })
}


export {
    getHomePage,
    getLoginPage,
    getSignUpPage,
    logOutAccount,
    getAddBlogPage,
    getBlogWithId,
    getAllYourBlogs
}
