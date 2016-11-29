$(document).ready(function () {

    $('#semana').click(function () {
        $('#grafo1').show();
        $('#grafo2').hide();
        $('#grafo3').hide();

    });

    $('#mes').click(function () {
        $('#grafo1').hide();
        $('#grafo2').show();
        $('#grafo3').hide();

    });
    
    $('#anio').click(function () {
        $('#grafo1').hide();
        $('#grafo2').hide();
        $('#grafo3').show();

    });
});
