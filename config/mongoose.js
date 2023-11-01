import mongoose from "mongoose";

mongoose.connect(`mongodb://0.0.0.0:27017/polling_system_api_development`);

const db=mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting mongodb'));

db.once('open',function(){

    console.log('Connected to database :: mongoDB');
})

export default db;