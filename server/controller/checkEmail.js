async function checkEmail(req,res){
    try{

        const {email} = req.body

        const checkEmail = await UserModel.findOne({email});


    }catch(err){
        return res.status(500).json({
            message:err.message || err,
            error: true
        })
    }
}