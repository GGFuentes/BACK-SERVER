const mongoose = require('mongoose');
require('dotenv').config();


const dbConnection = async() => {
    try{
        console.log(process.env.DB_CONNECTION);
        await mongoose.connect(process.env.DB_CONNECTION,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
            //useCreateIndex: true
        });
        console.log('CONNECT DB');
    }catch(error){
        console.log(error);
        throw new Error('Error al conectar DB');
    }
}

module.exports = {
    dbConnection
}
