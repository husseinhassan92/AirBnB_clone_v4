$(document).ready(function () {
  const amenityObj = {};

  $('.amenities .popover input').on('change', function () {
    const name = $(this).attr('data-name');
    const id = $(this).attr('data-id');

    if ($(this).is(':checked')) {
      amenityObj[name] = id;
    } else {
      delete amenityObj[name];
    }

    const names = Object.keys(amenityObj).sort().join(', ');
    $('.amenities h4').text(names);
  });
});
