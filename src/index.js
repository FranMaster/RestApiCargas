const express = require('express')
const Morgan = require('morgan')
const path = require('path');
const exphbs=require('express-handlebars')
//Inicializacion
const app = express()

//Configuraciones
app.set('port', process.env.PORT || 3000)
app.set('views', path.join(__dirname, 'views'))
//--configuro el motor de vistas
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutDir: path.join(app.get('views'), 'layouts'),
    partialDir: path.join(app.get('views'), 'paartials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}))

app.set('view engine', '.hbs')




//Middlewares
app.use(Morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())


//Variables Globales
app.use((req,res,next)=>{
    next()
})




//Rutas
app.use(require('./router/index'))
app.use(require('./router/autentication'))
app.use(require('./router/link'))

//Publicos
app.use(express.static(path.join(__dirname,'public')))


//IniciarServidor
app.listen(app.get('port'), () => {
    console.log(`Aplicacion escuchando en Puerto:${app.get('port')}`);
})




