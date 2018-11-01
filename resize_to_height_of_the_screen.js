$(document).ready(function(){
    resizeContent();

    $(window).resize(function() {
        resizeContent();
    });
});

function resizeContent() {
    $height = $(window).height() - 90;
    $('body div#wrapper-83').height($height);
}
