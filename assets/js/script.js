btn = $('.btn-up');
nav = $('.menu-sticky-items');
$(btn).click(function() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });

});

$(window).scroll(function() {
  scrollPosition = $(document).scrollTop();
  if (scrollPosition >= 50) {
    $(btn).fadeIn(500);
  } else {
    $(btn).fadeOut(500);
  }

  if (scrollPosition >= 500) {
    $(nav).fadeIn(500);
  } else {
    $(nav).fadeOut(500);
  }
});
