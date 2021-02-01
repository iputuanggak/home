$('#contact').click(function () {
  $('#contact').addClass('active');
});

$(".close").click(function () {
  $('#contact').removeClass('active');
});

$('#exampleModal').on('hidden.bs.modal', function () {
  $('#contact').removeClass('active');
});