(function () {
  'use strict'
  if(document.documentElement.clientWidth < 1920) {
  var position = 0;

  window.addEventListener('DOMContentLoaded', function () {
    setInterval(function () {
      var legendSliderList = document.querySelector('.legend-slider__list');
      position = position - 274;
      if (position <= -822) {
        position = 0;
      }
    legendSliderList.style.left = position + 'px';
    }, 1000);


  });
}
})();

