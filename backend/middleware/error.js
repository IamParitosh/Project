const ErrorHander = require("../utils/errorhandler");


module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


    // Wrong Mongodb ID Error
    if (err.name === "CastError") {

        const message = `Resource notfound. Invalid: ${err.path}`;
    }
    
    res.status(err.statusCode).json({
        success: false,
        error: err,
    });
};