const gulp = require('gulp')
const {series,parallel} = require('gulp')
//const series = gulp.series

const antes1 = cb =>{
    console.log("Tarefa 1")
    return cb()
}

const antes2 = cb =>{
    console.log("Tarefa 2")
    return cb()
}
function copiar(cb){
    console.log('Tarefa de copiar!!')
    return cb()
}
const fim = cb =>{
    console.log("tarefa fim")
    return cb()
}

module.exports.default = series(
    parallel(antes1,antes2),
    copiar,
    fim)
