import User from "../database/models/userModel.js";
import bcrypt from 'bcryptjs'

async function matchEmailAndPasswordForUser (email, password) {
    const user = await User.findOne({ email });
    if(!user) return null
   // console.log(user);
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) return user
}

export default matchEmailAndPasswordForUser