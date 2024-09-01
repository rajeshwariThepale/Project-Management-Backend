const mongoose = require('mongoose');

const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/ProjectManagement');
        console.log('MongoDB connected');
    }
    catch(error){
        console.log('error',error.message);
    }
};

module.exports = connectDB;