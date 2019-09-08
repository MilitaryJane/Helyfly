(function () {
  'use strict'
  if(document.documentElement.clientWidth <= 1920) {
  var position = 0;

  window.addEventListener('DOMContentLoaded', function () {
    console.log(document.documentElement.clientWidth);

    setInterval(function () {
      var sliderList = document.querySelector('.slider__list');
      position = position - 290;
      if (position < -3190) {
        position = 0;
      }
    sliderList.style.left = position + 'px';
    }, 1000);


  });
}
})();

