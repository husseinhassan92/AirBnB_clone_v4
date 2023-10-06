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
    })
});