(function () {
    if (document.querySelector(".page-main__map")) {
        var imageMap = document.querySelector(".map__image-wrapper");
        function hideImageMap() {
            imageMap.classList.add("visually-hidden");
        }

        window.onload = hideImageMap;
    }
})();
