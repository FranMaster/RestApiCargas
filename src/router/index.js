const express = require('express');
const ruta=express.Router()


ruta.get('/',(req,res)=>{
    res.send('Hola Mundo')
})


module.exports=ruta
