const Request = require('../model/app')

const getRequest = async (req,res)=>{
  try {
    const requests = await Request.find();
    res.status(201).json({requests})
  } catch (error) {
    res.status(500).json({msg:error})
  }
  
}
const getSpecificRequest=async(req,res)=>{
  try {
    const {id:productID} =req.params
    const requests = await Request.findOne({_id:productID})
    res.json({requests})
  } catch (error) {
    res.status(500).json({msg:error})
  }
 
}


const postRequest =async (req,res)=>{
  try {
    const requests = await Request.create(req.body)
  res.json(requests)
  } catch (error) {
    res.status(500).json({msg:error})
  }
  
 
}

const updateRequest =async (req,res)=>{
  try {
    const {id:productID} =req.params
    const requests = await Request.findOneAndUpdate({_id:productID},req.body,{
      new:true,
      runValidators:true
  })
    res.json({requests})
  } catch (error) {
    res.status(500).json({msg:error})
  }
 

}
  const deleteRequest =async(req, res) => {
    try {
      const {id:productID} =req.params
    const requests = await Request.findOneAndDelete({_id:productID})
    res.json({requests})
     
      
    } catch (error) {
      res.status(500).json({msg:error})
    }
  
  }
module.exports ={getRequest,postRequest,deleteRequest,updateRequest,getSpecificRequest}