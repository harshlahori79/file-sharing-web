import mongoose from 'mongoose';

export const DBconnection = async() => {

    //const MONGO_URI = `mongodb://admin:admin@ac-7maqfhl-shard-00-00.9qwwkap.mongodb.net:27017,ac-7maqfhl-shard-00-01.9qwwkap.mongodb.net:27017,ac-7maqfhl-shard-00-02.9qwwkap.mongodb.net:27017/?ssl=true&replicaSet=atlas-ovx1sq-shard-0&authSource=admin&retryWrites=true&w=majority&appName=AtlasApp`

    const MONGO_URI = `mongodb+srv://admin:admin@file-sharing.9qwwkap.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`;

    try{

        await mongoose.connect(MONGO_URI , {useNewUrlParser : true});
        console.log("database connected successfully");


    }catch(error)
    {
        console.error("error while connecting to the database",error.message);
    }


}


