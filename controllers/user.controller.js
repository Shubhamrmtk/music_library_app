const {PrismaClient}=require("@prisma/client")
const req = require("express/lib/request")
const prisma=new PrismaClient()

const getUser=async(req,res)=>{
  try {
    const userData=await prisma.user.findMany({})
    res.send(userData)
  } catch (error) {
    res.send(error.message)
    
  }
}

const addUser=async(req,res)=>{
  try {
    console.log(req.body)
    await prisma.user.create({data:req.body})
    res.send("user is added")
  } catch (error) {
    console.log(error.message)
    res.send(error.message)
  }
}

module.exports={getUser,addUser}