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

    $.ajax({
        type: 'POST',
        url: 'http://0.0.0.0:5001/api/v1/places_search/',
        data: '{}',
        ContentType: 'application/json',
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                $('section.places').append('<article><div class="title"><h2>' + data[i].name + '</h2><div class="price_by_night">' + data[i].price_by_night + '</div></div><div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' + data[i].max_guest + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' + data[i].number_rooms + ' Bedrooms</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + data[i].number_bathrooms + ' Bathroom</div></div><div class="description">' + data[i].description + '</div></article>');
            }
        }
    });

    $('button').on('click', function () {
        $('article').remove();
        $.ajax({
            type: 'POST',
            url: 'http://0.0.0.0:5001/api/v1/places_search/',
            data: JSON.stringify({ 'amenities': Object.keys(dict) }),
            ContentType: 'application/json',
            success: function (data) {
                for (let i = 0; i < data.length; i++) {
                    $('section.places').append('<article><div class="title"><h2>' + data[i].name + '</h2><div class="price_by_night">' + data[i].price_by_night + '</div></div><div class="information"><div class="max_guest"><i class="fa fa-users fa-3x" aria-hidden="true"></i><br />' + data[i].max_guest + ' Guests</div><div class="number_rooms"><i class="fa fa-bed fa-3x" aria-hidden="true"></i><br />' + data[i].number_rooms + ' Bedrooms</div><div class="number_bathrooms"><i class="fa fa-bath fa-3x" aria-hidden="true"></i><br />' + data[i].number_bathrooms + ' Bathroom</div></div><div class="description">' + data[i].description + '</div></article>');
                }
            }
        });
    });
});
