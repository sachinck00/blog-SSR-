import User from "../database/models/userModel.js";
import { createTokenForUser } from "../services/authentication.js";
import matchEmailAndPasswordForUser from "../services/matchEmailAndPasswordForUser.js";
import Blog from "../database/models/blogModel.js";
import Comment from "../database/models/comment.js";

const handleSignUp = async (req, res) => {
  const { username, email, password } = req.body;
 // console.log(username, email);
  await User.create({
    fullName: username,
    email,
    password,
  });
  res.redirect("/login")
};

const handleLogin = async (req, res) => {
  const { email, password } = req.body;
  const user = await matchEmailAndPasswordForUser(email, password)
  if(!user) return res.render("login", {
    msg : "user does found . . . check email and password"
  })
 // console.log("current logged in user  : ", user.fullName);
  const token = createTokenForUser(user);
  res.cookie("token", token).redirect('/')
};


const handleBlogsController = async (req, res) => {
  const {title , body } = req.body
  const file = req.file

  const newBlog = await Blog.create({
    title,
    body,
    createdBy : req.user._id ,
    coverImageUrl : `/uploads/${file.filename}`
  })
 // console.log(newBlog)

  res.redirect(`/blog/${newBlog._id}`)
}

const handleComments = async (req, res) => {
  const blogId =  req.params.blogid

  const comment = await Comment.create({
    content : req.body.comment,
    createdBy : req.user._id,
    toBlogId : blogId
  })
  //console.log(comment);
  res.redirect(`/blog/${blogId}`)
}

export { handleLogin, handleSignUp, handleBlogsController, handleComments };
