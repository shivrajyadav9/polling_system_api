import mongoose from 'mongoose';

let questionSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    options:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Option'
        }
    ]
});

let Question=mongoose.model('Question',questionSchema);
export default Question;