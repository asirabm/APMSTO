const mongoose=require('mongoose')
//const coverImageBasePath='uploads/bookCovers'
const path=require('path')

const BookSchema=mongoose.Schema({
title:{
    type:String,
    required:true
},
description:{
    type:String,
},
publishedDate:{
    type:Date,
    required:true
},
pageCount:{
    type:Number,
    required:true
},
createdAt:{
    type:Date,
    required:true,
    default:Date.now
},
coverImage:{
    type:Buffer,
    required:true,

},
coverImageType:{
 type:String,
 required:true
},
author:{
    type:mongoose.Schema.Types.ObjectId,
    required:true,
    ref:'Author'
}
})
BookSchema.virtual('coverImagePath').get(function(){
   
    if(this.coverImage!=null && this.coverImageType!=null){
        console.log(`data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`)
        return `data:${this.coverImageType};charset=utf-8;base64,${this.coverImage.toString('base64')}`
       // console.log( path.join('/',coverImageBasePath,this.coverImageName))
      ///  return path.join('/',coverImageBasePath,this.coverImageName)
    }
})

module.exports=mongoose.model('Book',BookSchema)
//module.exports.coverImageBasePath=coverImageBasePath