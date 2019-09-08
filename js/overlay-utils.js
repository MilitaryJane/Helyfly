(function () {
  'use strict'
  var overlay = document.querySelector('.overlay');

  window.overlayUtils = {
      overlayShow: function () {
          overlay.classList.add('overlay--show');
      },
      overlayHide: function () {
          overlay.classList.remove('overlay--show');
      }
  }
})();
