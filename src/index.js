const express=require('express')
const Morgan=require('morgan')
//Inicializacion
const app=express()

//Configuraciones

app.set('port',process.env.PORT ||3000)

//Middlewares
app.use(Morgan('dev'))


//Variables Globales


//Rutas



//Publicos



//IniciarServidor
app.listen(app.get('port'),()=>{
    console.log(`Aplicacion escuchando en Puerto:${app.get('port')}`);
})




