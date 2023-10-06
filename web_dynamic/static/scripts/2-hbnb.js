$('document').ready(function () {
    const dict = {};
    $('input[type=checkbox]').change(function () {
        const name = $(this).attr('data-name');
        if ($(this).is(':checked')) {
            dict[$(this).attr('data-id')] = name;
        } else {
            delete dict[$(this).attr('data-id')]
        }
        $('.amenities h4').text(Object.values(dict).join(', '))
    });

    const url = 'http://0.0.0.0:5001/api/v1/status/';
    $.get(url, function (status){
        if (status.status === 'OK'){
            $('div#api_status').addClass('available');
        } else {
            $('div#api_status').removeClass('available');
        }

    });
});
