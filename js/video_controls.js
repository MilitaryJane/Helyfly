(function () {
  'use strict'

  var playButton = document.querySelector('.about-photosession__play-button');
  var preview = document.querySelector('.about-photosession__image-wrapper');
  var videoWrapper = document.querySelector('.about-photosession__video-content');


  playButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    preview.classList.add('about-photosession__image-wrapper--close');
    videoWrapper.classList.remove('about-photosession__image-wrapper--open');
  });

})();
