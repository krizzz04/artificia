const mongoose=require('mongoose')
const User=mongoose.model('students',
{
    username:{
        type:String,unique:true,required:true
    },
    name:{
        type:String,required:true
    },
    email:{
        type:String,unique:true,required:true
    },
    password:{
        type:String,required:true
    },
    aimlMarks: { type: Number, default: 0 }, // Assuming AIML marks are stored as numbers
     dbmsMarks: { type: Number, default: 0 },
     atcdMarks: { type: Number, default: 0 },
     cnMarks: { type: Number, default: 0 },
     dbmsMarks: { type: Number, default: 0 }

    
})

module.exports=User