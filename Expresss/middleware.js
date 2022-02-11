const AcessControl = (req, res, next) => {

    const access = true;
    if (!access) {
        res.status(401).json
            ({
                success: false,
                message: "your are not autorize"
            })
    }
    next();
}


const defaultMilddware=(req,res,next)=>{
    console.log("defaultMilddware");
}
module.exports = {
    AcessControl,
    defaultMilddware
};