import { validateToken } from "../services/authentication.js"
import User from "../database/models/userModel.js"

const checkForAuthUserCookie = () => {
    return async (req, res, next) => {
        const token = req.cookies?.token
        //console.log("token from auth :. ",token)
        if (!token) return next()
        try {
            const {_id } = validateToken(token);
            const [ currentUser ] = await User.find({_id})
            //console.log(currentUser)
            req.user = currentUser
            return next()
        } catch (error) {
            console.log("error at check for authenticated token ",error);
        }
    }
}
export default checkForAuthUserCookie