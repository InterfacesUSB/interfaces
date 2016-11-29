$(document).ready(function () {

    // living room slider

    $('#electric_living_room').click(function () {
        $('#electric_living_room').hide();
        $('#solar_living_room').show();
        alertGeneral('#1', 'alert-living_room-1', 'La sala esta utilizando energ&iacute;a solar');
        alertFadeOut('#alert-living_room-1');
    });

    $('#solar_living_room').click(function () {
        $('#solar_living_room').hide();
        $('#electric_living_room').show();
        alertGeneral('#1', 'alert-living_room-2', 'La sala esta utilizando energ&iacute;a el&eacute;ctrica');
        alertFadeOut('#alert-living_room-2');
    });

    // kitchen slider

    $('#electric_kitchen').click(function () {
        $('#electric_kitchen').hide();
        $('#solar_kitchen').show();
        alertGeneral('#2', 'alert-kitchen-1', 'La sala esta utilizando energ&iacute;a solar');
        alertFadeOut('#alert-kitchen-1');
    });

    $('#solar_kitchen').click(function () {
        $('#solar_kitchen').hide();
        $('#electric_kitchen').show();
        alertGeneral('#2', 'alert-kitchen-2', 'La sala esta utilizando energ&iacute;a el&eacute;ctrica');
        alertFadeOut('#alert-kitchen-2');
    });

    // room1 slider

    $('#electric_room1').click(function () {
        $('#electric_room1').hide();
        $('#solar_room1').show();
        alertGeneral('#3', 'alert-room1-1', 'La sala esta utilizando energ&iacute;a solar');
        alertFadeOut('#alert-room1-1');
    });

    $('#solar_room1').click(function () {
        $('#solar_room1').hide();
        $('#electric_room1').show();
        alertGeneral('#3', 'alert-room1-2', 'La sala esta utilizando energ&iacute;a el&eacute;ctrica');
        alertFadeOut('#alert-room1-2');
    });

    // bathroom slider

    $('#electric_bathroom').click(function () {
        $('#electric_bathroom').hide();
        $('#solar_bathroom').show();
        alertGeneral('#4', 'alert-bathroom-1', 'La sala esta utilizando energ&iacute;a solar');
        alertFadeOut('#alert-bathroom-1');
    });

    $('#solar_bathroom').click(function () {
        $('#solar_bathroom').hide();
        $('#electric_bathroom').show();
        alertGeneral('#4', 'alert-bathroom-2', 'La sala esta utilizando energ&iacute;a el&eacute;ctrica');
        alertFadeOut('#alert-bathroom-2');
    });

});

function alertFadeOut(id) {
    window.setTimeout( function(){
        $(id).fadeOut("slow", function() { $(this).remove();});
    }, 2000
    ); // 2 seconds
}

/** Function that creates a general alert
    @param id_div: id of the element where you wish to add de alert
    @param id: id: of the alert created
    @param text: texto of the alert
*/
function alertGeneral(id_div, id, text) {
    var alert1 = '<div id="' + id + '" class="alert alert-info">';
    var alert2 = '</div>';
    $(id_div).append(alert1 + text + alert2);
}
