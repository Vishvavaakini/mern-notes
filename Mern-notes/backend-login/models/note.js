import mongoose from 'mongoose';
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    fileUrl:{
        type: String,
        required: false
    },
    createdAt:{
        type: Date,
        default: Date.now
    }

},{timestamps:true});