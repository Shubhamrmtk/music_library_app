const {PrismaClient}=require("@prisma/client")
const prisma=new PrismaClient()

const userRating=async(req,res)=>{
  try {
    const getRating=await prisma.rating.findMany({include:{song:true}})
    res.send(getRating)
  } catch (error) {
    res.send(error.message)
    
  }
}

// 
const addRating=async(req,res)=>{
  try {
    const {songId,userId,rating}=req.body
    await prisma.rating.create({data:{songId:parseInt(songId),userId:parseInt(userId),rating}})
    const averageRating=await prisma.rating.aggregate({  _avg: {
      rating: true,
    },where:{songId:parseInt(songId)}})
    await prisma.song.update({where:{id:parseInt(songId)},data:{average:parseInt(averageRating._avg.rating)}})
    res.send("your rating is applied ")
  } catch (error) {
    res.send(error.message)
  }


}
const averageRating=async(req,res)=>{
  try {
    const{songId}=req.body
    const averageRating=await prisma.rating.aggregate({  _avg: {
      rating: true,
    },where:{songId:parseInt(songId)}})
    res.send(averageRating)
  } catch (error) {
    res.send(error.message)
  }
}


module.exports={userRating,addRating,averageRating}