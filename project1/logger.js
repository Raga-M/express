const fs=require("fs")
function logger(req,res,next) {
    const logEntry=`${new Date().toISOString()} ${req.method} ${req.url}\n`
    console.log(logEntry);
    fs.appendFile('request.txt',logEntry)
    next()
}
module.exports=logger