$(window).scroll(function(){
  if ($(this).scrollTop() > 100) {
    $('#scroll-to-top').show();
  } else {
    $('#scroll-to-top').hide();
  }
});

$('#scroll-to-top').hide();

$('#scroll-to-top').on('click', function() {
  $('html, body').animate({
      scrollTop : 0
    }, 300
  );
  return false;
})