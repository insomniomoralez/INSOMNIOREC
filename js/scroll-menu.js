/*jslint browser: true*/
/*global $, jQuery*/
$(document).ready(function () {
    "use strict";
    var flag = false,
        scroll;
    $(window).scroll(function () {
        scroll = $(window).scrollTop();
        if (scroll > 200) {
            if (!flag) {
                /*$("#logo").css({
                    "margin-top": "2px",
                    "width": "84px",
                    "height": "42px"
                });*/
                $("#nav-bar").css({
                    "background-color": "rgba(0, 0, 0, 0.65)",
                    "box-shadow": "-0px 5px 5px rgba(0, 0, 0, 0.50)",
                });
                flag = true;
            }
        } else {
            if (flag) {
                /*$("#logo").css({
                    "margin-top": "42px",
                    "width": "150px",
                    "height": "75px"
                });*/
                $("#nav-bar").css({
                    "background-color": "transparent",
                    "box-shadow": "none",
                });
                flag = false;
            }
        }
    });
});