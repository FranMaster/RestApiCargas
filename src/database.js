const mysql=require('mysql')
const dbs=require ('./keys')
const {promisify}=require('util')
const pool=mysql.createPool(dbs)

pool.getConnection((err,connection)=>{
    if  (err){
        if  (err==='PROTOCOL_CONNECTION'){
            console.error('DATABSE CONECTION WAS CLOSED')
        }
        if  (err==='ECONNREFUSED'){
            console.error('CONEXION RECHAZADA')
        }
        if  (err==='ER_CON_COUNT_ERROR'){
            console.error('DATABASE CON MUCHAS CONEXIONES')
        }
    }

    if(connection)
       connection.release()
    console.log('DB is conected');
    return;


});

pool.query=promisify(pool.query)

module.exports=pool