$(document).ready(function () {

    // living room slider

    changeBrightness('#slider_living_room_val', '#img_living_room');

    var changeValue_living_room = function() {
       $('#slider_living_room_val').text(sliderLivingRoom.getValue());
        changeBrightness('#slider_living_room_val', '#img_living_room');
    };

    var sliderLivingRoom = $('#slider_living_room').slider()
    		.on('slide', changeValue_living_room)
    		.data('slider');

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

    changeBrightness('#slider_kitchen_val', '#img_kitchen');

    var changeValue_kitchen = function() {
       $('#slider_kitchen_val').text(sliderKitchen.getValue());
        changeBrightness('#slider_kitchen_val', '#img_kitchen');
    };

    var sliderKitchen = $('#slider_kitchen').slider()
    		.on('slide', changeValue_kitchen)
    		.data('slider');

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

    changeBrightness('#slider_room1_val', '#img_room1');

    var changeValue_room1 = function() {
       $('#slider_room1_val').text(sliderRoom1.getValue());
       changeBrightness('#slider_room1_val', '#img_room1');
    };

    var sliderRoom1 = $('#slider_room1').slider()
    		.on('slide', changeValue_room1)
    		.data('slider');

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

    changeBrightness('#slider_bathroom_val', '#img_bathroom');

    var changeValue_bathroom = function() {
       $('#slider_bathroom_val').text(sliderBathroom.getValue());
       changeBrightness('#slider_bathroom_val', '#img_bathroom');
    };

    var sliderBathroom = $('#slider_bathroom').slider()
    		.on('slide', changeValue_bathroom)
    		.data('slider');

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

// function that changes the brightness of the image
function changeBrightness(id_val, id_img) {
    var val = $(id_val).text();

    var brightness;
    if (val === 0){
        brightness = 17;
    }
    if (val < 11) {
        brightness = 25;
    }
    else if (val > 10 && val < 30) {
        brightness = 30;
    }
    else {
        brightness = val;
    }

    var brightness_img = 'brightness(' + brightness + '%)';
    $(id_img).css({
           'filter' : brightness_img,
           '-webkit-filter' : brightness_img,
           '-moz-filter' : brightness_img,
           '-o-filter' : brightness_img,
           '-ms-filter' : brightness_img,
    });
}

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
