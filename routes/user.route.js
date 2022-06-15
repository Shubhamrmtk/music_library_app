const route=require("express").Router()
const{addUser,getUser}=require("../controllers/user.controller")

route.get("/user",getUser)
route.post("/user",addUser)


module.exports=route