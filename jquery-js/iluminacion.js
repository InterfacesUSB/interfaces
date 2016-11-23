$(document).ready(function () {

    // $('#slider_kitchen').slider({
    // 	formatter: function(value) {
    // 		return 'Current value: ' + value;
    // 	}
    // });

    // kitchen slider
    var changeValue_kitchen = function() {
       $('#slider_kitchen_val').text(sliderKitchen.getValue());
    };

    var sliderKitchen = $('#slider_kitchen').slider()
    		.on('slide', changeValue_kitchen)
    		.data('slider');

    // bathroom slider
    var changeValue_bathroom = function() {
       $('#slider_bathroom_val').text(sliderBathroom.getValue());
    };

    var sliderBathroom = $('#slider_bathroom').slider()
    		.on('slide', changeValue_bathroom)
    		.data('slider');

    // room1 slider
    var changeValue_room1 = function() {
       $('#slider_room1_val').text(sliderRoom1.getValue());
    };

    var sliderRoom1 = $('#slider_room1').slider()
    		.on('slide', changeValue_room1)
    		.data('slider');

});
