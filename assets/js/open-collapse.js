$(document).ready(function() {
    var anchor = window.location.hash;
    if (anchor) {
        $(anchor).collapse('toggle');
    }
});