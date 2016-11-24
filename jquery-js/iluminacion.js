$(document).ready(function () {

    // kitchen slider
    var changeValue_kitchen = function() {
       $('#slider_kitchen_val').text(sliderKitchen.getValue());
        changeBrightness('#slider_kitchen_val', '#img_kitchen');
    };

    var sliderKitchen = $('#slider_kitchen').slider()
    		.on('slide', changeValue_kitchen)
    		.data('slider');

    // bathroom slider
    var changeValue_bathroom = function() {
       $('#slider_bathroom_val').text(sliderBathroom.getValue());
       changeBrightness('#slider_bathroom_val', '#img_bathroom');
    };

    var sliderBathroom = $('#slider_bathroom').slider()
    		.on('slide', changeValue_bathroom)
    		.data('slider');

    // room1 slider
    var changeValue_room1 = function() {
       $('#slider_room1_val').text(sliderRoom1.getValue());
       changeBrightness('#slider_room1_val', '#img_room1');
    };

    var sliderRoom1 = $('#slider_room1').slider()
    		.on('slide', changeValue_room1)
    		.data('slider');

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
