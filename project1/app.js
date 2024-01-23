const express= require("express")
const router=require("./router/root")
const logger =require('./logger')
var app = express();


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded());


app.use(express.static("public"))
let port =3000;
// app.use(logger)
app.use(router)
app.listen(port)


