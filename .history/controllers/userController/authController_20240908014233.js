exports.signup_stageOne = async (req,res,next){
    try{
        const { name, email, password } = req.body;
    }catch(error){
        console.error("Error in signup process:", error);
        next(error)
    }
}