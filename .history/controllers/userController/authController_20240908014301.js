exports.signup_stageOne = async (req,res){
    try{
        const { name, email, password } = req.body;
        console.log("Received signup request with data:", req.body);
    }catch(error){
        console.error("Error in signup process:", error);

    }
