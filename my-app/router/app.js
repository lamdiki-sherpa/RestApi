const express= require('express')
const router = express.Router()
const {getRequest,getSpecificRequest,postRequest,deleteRequest,updateRequest} =require('../controller/app')

router.get('/allproducts',getRequest)

router.get('/:id',getSpecificRequest)
router.post('/create',postRequest)
router.patch('/:id', updateRequest)
router.delete('/:id',deleteRequest)

module.exports = router