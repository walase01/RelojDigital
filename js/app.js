
const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHora(fecha.getHours());
    let mt = formatoHora(fecha.getMinutes());
    let sd = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr} : ${mt} : ${sd}`;

    const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const dias = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];

    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    
    let fechaTexto = `${diaSemana}, ${dia} de  ${mes} del año ${fecha.getFullYear()}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('Contenedor').classList.toggle('animar');

}   

setInterval(mostrarReloj,1000);

const formatoHora = (hora)=>{
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora;
}