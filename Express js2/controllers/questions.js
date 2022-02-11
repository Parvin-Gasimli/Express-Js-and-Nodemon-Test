const GetAllQuestions=(req,res,next)=>{
    res.status(200).json({
        success:true,
        data:"ok"

    });
    next()
}

module.exports ={
    GetAllQuestions
}