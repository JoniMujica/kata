function fecha (){
    let f = new Date();
    
    let fecha = f.getDate() + '/' + f.getMonth() + '/' + f.getFullYear() + ' ' 
    + f.getHours() + ':' + f.getMinutes() + ':' + f.getSeconds() + '.' + f.getMilliseconds();
    return fecha;
}