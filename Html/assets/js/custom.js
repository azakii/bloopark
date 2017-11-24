/* custom js */

$(document).ready(function(){
    
    $('.icon-menu').click(function() {
        $('#menu').animate({left:'0px'}, 200);
        $('body').animate({left:'285px'}, 250);
    });
    $('.icon-close').click(function() {
        $('#menu').animate({left:'-285px'}, 200);
        $('body').animate({left:'0px'}, 200);
    });
   
});


// product quantity

$(".incr-btn").on("click", function (e) {
    var $button = $(this);
    var oldValue = $button.parent().find('.quantity').val();
    $button.parent().find('.incr-btn[data-action="decrease"]').removeClass('inactive');
    if ($button.data('action') == "increase") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Don't allow decrementing below 1
        if (oldValue > 1) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 1;
            $button.addClass('inactive');
        }
    }
    $button.parent().find('.quantity').val(newVal);
    e.preventDefault();
});


//
