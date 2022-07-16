const BD = require('./conexion_postgresql.js')

const callback = (err, rows, resolve, reject)=>{
    if(err) return reject(err);
    return resolve(rows);
}

module.exports = {

    methods:{
        selectAll:function(){
            return new Promise((resolve, reject)=>{
                BD.query('SELECT *FROM persona', (err, rows)=>{
                    callback(err, rows, resolve, reject)
                })
            })
        },
        deletePerson:function(id){
            return new Promise((resolve, reject)=>{
                BD.query(`DELETE FROM persona WHERE id='${id}'`, (err, rows)=>{
                    callback(err, rows, resolve, reject)
                })
            })
        },
        insertPersona:function(data){
            return new Promise((resolve, reject)=>{
                BD.query(`INSERT INTO persona (id, Nombre, Apellido, Telefono, image) VALUES (default, '${data.nombre}', '${data.apellido}', '${data.telefono}', '${data.image}')`, (err, row)=>{
                    callback(err, row, resolve, reject)
                })
            })
        }
    }
}