$(document).ready(function () {

    $('.num').click(function () {
        var num = $(this);
        var text = $.trim(num.find('.txt').clone().children().remove().end().text());
        var telNumber_H = $('#telNumber_H');
        $('#telNumber_H').val(telNumber_H.val() + text);

        if ($('#unmask_password').is(':hidden')) {
            $('#telNumber').val(telNumber_H.val());
        }
        else {
            var mask = "";
            for (var i = 0; i < $('#telNumber_H').val().length; i++) {
                mask += '*';
            }
            $('#telNumber').val(mask);
        }

    });

    $('#mask_password').click(function () {
        var telNumber = $('#telNumber').val();
        var mask = "";
        for (var i = 0; i < telNumber.length; i++) {
            mask += '*';
        }
        $('#telNumber').val(mask);
        $('#mask_password').hide();
        $('#unmask_password').show();
    });

    $('#unmask_password').click(function () {
        var telNumber = $('#telNumber_H').val();
        $('#telNumber').val(telNumber);
        $('#unmask_password').hide();
        $('#mask_password').show();
    });

    $('#clean').click(function () {
        $('#telNumber').val("");
        $('#telNumber_H').val("");
    });

    $('#mano').click(function () {
        $('#img_hand').hide();
        $('#gif_hand').show();
        window.setTimeout( function(){window.location.href = "main.html"; }, 10100 ); // 10 seconds
    });

    $('#mano_config').click(function () {
        $('#img_hand').hide();
        $('#gif_hand').show();
        window.setTimeout(function(){window.location.href = "configuracion.html"; }, 10100 ); // 10 seconds
    });


});
