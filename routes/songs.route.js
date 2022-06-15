const router = require('express').Router();
const{getSongs,addSong,getArtist,songAndartist,userRating}=require("../controllers/songs.controller")


router.get("/song",getSongs)
router.post("/song",addSong)
router.get("/artist",getArtist)
router.get("/songAndartist",songAndartist)


module.exports=router
