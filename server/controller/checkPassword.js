// const UserModel = require("../models/UserModel");
// const bcryptjs = require('bcryptjs');
// const jwt = require("jsonwebtoken");

// async function checkPassword(req,res){
//     try{

//         const {password, userId} = req.body

//         const userModel = await UserModel.findById(userId);

//         const verifyPass = await bcryptjs.compare(password. user.password)

//         if(!verifyPass){
//             return res.status(400).json({
//                 message: "Please check your password",
//                 error:true
//             })
//         }

//         const tokenData = {
//             id: user._id,
//             email: user.email
//         }
//         const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn: '1d'})

//         const cookieOption ={
//             http: true,
//             secure: true
//         }

//         return res.cookie('token',token, cookieOption).status(200).json({
//             message: "Login successfully",
//             // data: user,
//             token: token,
//             success: true
//         })

        


//     }catch(err){
//         return res.status(500).json({
//             message:err.message || err,
//             error: true
//         })
//     }
// }


// module.exports = checkPassword;


const UserModel = require("../models/UserModel")
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

async function checkPassword(request,response){
    try {
        const { password, userId } = request.body

        const user = await UserModel.findById(userId)

        const verifyPassword = await bcryptjs.compare(password,user.password)

        if(!verifyPassword){
            return response.status(400).json({
                message : "Please check password",
                error : true
            })
        }

        const tokenData = {
            id : user._id,
            email : user.email 
        }
        const token = await jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{ expiresIn : '1d'})

        const cookieOptions = {
            http : true,
            secure : true
        }

        return response.cookie('token',token,cookieOptions).status(200).json({
            message : "Login successfully",
            token : token,
            success :true
        })

    } catch (error) {
        return response.status(500).json({
            message : error.message || error,
            error : true
        })
    }
}

module.exports = checkPassword