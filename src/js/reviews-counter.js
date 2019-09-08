(function () {
  'use strict'
  window.addEventListener('DOMContentLoaded', function() {
    var reviewsCounter = document.querySelector('.reviews__counter');
    var reviews = document.querySelectorAll('.reviews__item');
    reviewsCounter.textContent = '(' + reviews.length + ')';
  });
})();
