(function () {
  'use strict'
  const ESC_KEYCODE = 27;

  var modal = document.querySelector('.modal');
  var buttonModalOpen = document.querySelectorAll('.button-reservation');
  buttonModalOpen = Array.prototype.slice.call(buttonModalOpen);
  var buttonModalClose = modal.querySelector('.modal__button-close');

  function onPopupEscPress(evt) {
      if (evt.keyCode === ESC_KEYCODE) {
          closeModal(evt);
      }
  };

  function closeModal(evt) {
      evt.preventDefault();
      modal.classList.remove('modal--show');
      window.overlayUtils.overlayHide();
      document.removeEventListener('keydown', onPopupEscPress);
  }

  function openModal(evt) {
      evt.preventDefault();
      modal.classList.add('modal--show');
      window.overlayUtils.overlayShow();

      document.addEventListener('keydown', onPopupEscPress);
  }

  buttonModalOpen.forEach(function (element) {
      element.addEventListener('click', openModal)
  });
  buttonModalClose.addEventListener('click', closeModal);
})();
