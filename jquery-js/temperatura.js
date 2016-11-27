$(document).ready(function () {

    // living room slider

    $('#electric_living_room').click(function () {
        $('#electric_living_room').hide();
        $('#solar_living_room').show();
    });

    $('#solar_living_room').click(function () {
        $('#solar_living_room').hide();
        $('#electric_living_room').show();
    });

    // kitchen slider

    $('#electric_kitchen').click(function () {
        $('#electric_kitchen').hide();
        $('#solar_kitchen').show();
    });

    $('#solar_kitchen').click(function () {
        $('#solar_kitchen').hide();
        $('#electric_kitchen').show();
    });

    // room1 slider

    $('#electric_room1').click(function () {
        $('#electric_room1').hide();
        $('#solar_room1').show();
    });

    $('#solar_room1').click(function () {
        $('#solar_room1').hide();
        $('#electric_room1').show();
    });

    // bathroom slider

    $('#electric_bathroom').click(function () {
        $('#electric_bathroom').hide();
        $('#solar_bathroom').show();
    });

    $('#solar_bathroom').click(function () {
        $('#solar_bathroom').hide();
        $('#electric_bathroom').show();
    });

});
