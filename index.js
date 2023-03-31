const express = require('express');
const { dbConnection } = require('./database/config')
const cors = require('cors')
require('dotenv').config();


//crea el servidor express
const app = express();
app.use(cors());

//Base de datos
dbConnection();



app.listen(process.env.PORT, () => { 
    console.log('servidor corriendo en '+ process.env.PORT)
});


//Rutas
app.get('/',(req, res) => {
    res.status(400).json({
        ok:true,
        msg: 'Todo Ok'
    });
})