const slider = $('.offer__list').bxSlider({
  pager: false,
  controls: false
});

$('.btn-slider--prev').click(e => {
  slider.goToPrevSlide();
})

$('.btn-slider--next').click( e => {
  slider.goToNextSlide();
})