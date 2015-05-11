(function () {
    'use strict';

    initNavigation();

    function initNavigation() {
        var $upBtn = $("#upBtn"), navigationList = $("nav>ul"), barrier = 120, previousPosition;
        $(window).scroll(function () {
            if ($(window).scrollTop() > barrier) {
                previousPosition = null;
                $upBtn.show();
                $upBtn.html("Up");
            } else if (!previousPosition) {
                $upBtn.hide();
            }
        });
        $upBtn.click(function () {
            var position = $(window).scrollTop();
            if (position > barrier) {
                previousPosition = position;
                $upBtn.html("Do");
                window.scrollTo(0, 0);
            } else {
                window.scrollTo(0, previousPosition);
                previousPosition = null;
            }
        });
        $("#menuBtn").click(function () {
            navigationList.slideToggle();
        });
    }
}());
