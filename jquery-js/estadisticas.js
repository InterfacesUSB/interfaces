function showSemana() {
    var img1 = document.getElementById('semana');
    img1.style.visibility = 'visible';
    var img2 = document.getElementById('mes');
    img2.style.visibility = 'hidden';
    var img3 = document.getElementById('anio');
    img3.style.visibility = 'hidden';  
}

function showMes() {
    var img1 = document.getElementById('semana');
    img1.style.visibility = 'hidden';
    var img2 = document.getElementById('mes');
    img2.style.visibility = 'visible';
    var img3 = document.getElementById('anio');
    img3.style.visibility = 'hidden';  
}

function showAnio() {
    var img1 = document.getElementById('semana');
    img1.style.visibility = 'hidden';
    var img2 = document.getElementById('mes');
    img2.style.visibility = 'hidden';
    var img3 = document.getElementById('anio');
    img3.style.visibility = 'visible';  
}
