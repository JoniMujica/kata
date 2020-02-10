function daysForEndYear1(){
    let restante = 365;
    let fecha = new Date();
    restante = (restante - fecha.getMonth() * 30) - fecha.getDate();
    return restante;
}

function daysForEndYear2(){

    const diasMeses = [31,28,31,30,31,30,31,31,30,31,30,31]
    let restante = 365;
    let fecha = new Date();

    for(let i = 0;i<fecha.getMonth();i++){
        restante = restante - diasMeses[i];
    }
    return restante - fecha.getDate();
}