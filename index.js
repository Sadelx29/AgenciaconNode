//declarar express
//const express = require('express');

import  express  from "express";
import db from "./config/db.js";
import roueters from "./routes/indexs.js";



const app = express();

//conectar base de datos
db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch( error => console.log(error))

// definir puerto
const port = process.env.port || 4000;

// habilitar PUG
app.set('view engine', 'pug')
// agregar body parses para leer  los datos del formulario
app.use(express.urlencoded({extended: true}))
//obtener año actual

app.use((req, res, next) =>{
    const year = new Date();

    res.locals.ActualYear = year.getFullYear();
    res.locals.NombreSitio = 'Agencia De Viajes'
    return next()

})
//agregar carpeta publica

app.use(express.static('public'));

//agregar routers
app.use('/', roueters)




app.listen(port, () =>{
    console.log(`el servidor esta en el puerto ${port}`)
});