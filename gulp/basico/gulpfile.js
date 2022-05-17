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
    gulp.src(['pastaA/**/*.txt']) //usar arquivos de entrada
        .pipe(gulp.dest('pastaB'))   //posso colocar transformações na minha aplicação
        //.pipe()   //alterar outra pipe and filters

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
