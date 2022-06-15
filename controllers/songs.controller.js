const {PrismaClient}=require("@prisma/client")
const router = require("../routes/songs.route")
const prisma=new PrismaClient()

const getSongs=async(req,res)=>{
  console.log("here")
  try {
    songData=await prisma.song.findMany({include:{songsAndartists:true,rating:true}})
    res.send(songData)
    
  } catch (error) {
    res.send(error.message)
    
  }
}
// ----------------------------------------------------------------------------------------
const addSong=async(req,res)=>{
  try { 
    const{songName,dateOfrelease,cover,artistsName,dob,bio}=req.body
    await prisma.song.create({data:{
      name:songName,
      dateOfrelease:new Date(dateOfrelease),
      cover}})
    await prisma.artists.create({data:{name:artistsName,dob:new Date(dob),bio}})

    const songData=await prisma.song.findMany({where:{name:songName}})
    const songId= songData[0].id
    const artistData=await prisma.artists.findMany({where:{name:artistsName}})
    const artistsId=artistData[0].id
    await prisma.songsAndartists.create({data:{songId,artistsId}})
    res.send("your song added ")
  } catch (error) {
    res.send(error.message)
  }
}
// -------------------------------------------------------------------------------------
const getArtist=async(req,res)=>{
  try {
    const artist=await prisma.artists.findMany({})
    res.send(artist)
  } catch (error) {
    res.send(error.message)
  }
}

const songAndartist=async(req,res)=>{
  try {
    const saData=await prisma.songsAndartists.findMany({})
    res.send(saData)
  } catch (error) {
    res.send(error.message)
    
  }
}
// ---------------------------------------------------------------------------------------------------
// ratings

module.exports={getSongs,addSong,getArtist,songAndartist}