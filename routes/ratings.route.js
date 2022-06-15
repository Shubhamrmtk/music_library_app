const { addRating,userRating, averageRating } = require("../controllers/rating.controller")

const route=require("express").Router()

route.get("/rating",userRating)
route.post("/rating",addRating)
route.post("/avrating",averageRating)

module.exports=route