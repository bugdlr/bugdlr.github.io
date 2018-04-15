
$('.hologram-btn').click(function () {
  $('.modal').show('500');
});

$('.modal a').click(function (e) {
  e.preventDefault;
  $('.modal').hide('500');
});
