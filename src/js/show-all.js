(function () {
  'use strict'
  var showAllPhotoButton = document.querySelector('.show-all-photo');
  var photos = document.querySelectorAll('.photos__item');
  photos = Array.prototype.slice.call(photos);

  var showAllReviewButton = document.querySelector('.show-all-review');
  var reviews = document.querySelectorAll('.reviews__item');
  reviews = Array.prototype.slice.call(reviews);

  showAllPhotoButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    photos.forEach(function (element) {
      element.classList.remove('photos__item--desktop');
    })
    showAllPhotoButton.style.display = "none";
  })

  showAllReviewButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    reviews.forEach(function (element) {
      element.classList.remove('reviews__item--desktop');
      element.classList.remove('reviews__item--mobile');
    })
    showAllReviewButton.style.display = "none";
  })


})();
