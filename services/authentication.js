import jwt from "jsonwebtoken"

const S_KEY = "sachinck00"

function createTokenForUser(user){
    return jwt.sign({
        _id : user._id ,
        email : user.email,
        profileImage : user.profileImage,
        role : user.role
    }, S_KEY) 
}

function validateToken(token){
    return jwt.verify(token, S_KEY)
}

export {
    createTokenForUser,
    validateToken
}