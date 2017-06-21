$(document).ready(function() {


    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 500, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    $('#clientsOwl').owlCarousel({
        items: 5,
        loop: true,
        margin: 0,
        merge: true,
        autoplay: true,
        navText: ['<', '>'],
        responsive: {
            678: {
                mergeFit: true
            },
            1000: {
                mergeFit: false
            }
        }
    });

    $('#testimonialsOwl').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        merge: true,
        autoplay: true,
        navText: ['<', '>'],
        responsive: {
            678: {
                mergeFit: true
            },
            1000: {
                mergeFit: false
            }
        }
    });



    $('#checkbox').change(function(){
        setInterval(function () {
            moveRight();
        }, 300);
    });

    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    $('#slider').css({ width: slideWidth*5, height: slideHeight });

    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 6000, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 6000, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });





});






// //**********************************
//
//     var i = 0 , prec;
//     var degs = $("#prec").attr("class").split(' ')[1];
//     var activeBorder = $(".active-border");
//
//     setTimeout(function(){
//         if($("#circle_id").is(":hover"))
//             loopit("c");
//         else
//             loopit("nc");
//     },1);
//
//     function loopit(dir){
//         if (dir == "c")
//             i++
//         else
//             i--;
//         if (i < 0)
//             i = 0;
//         if (i > degs)
//             i = degs;
//         prec = (100*i)/360;
//         $(".prec").html(Math.round(prec)+"%");
//
//         if (i<=180){
//             activeBorder.css('background-image','linear-gradient(' + (90+i) + 'deg, transparent 50%, #A2ECFB 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
//         }
//         else{
//             activeBorder.css('background-image','linear-gradient(' + (i-90) + 'deg, transparent 50%, #39B4CC 50%),linear-gradient(90deg, #A2ECFB 50%, transparent 50%)');
//         }
//
//         setTimeout(function(){
//             if($("#circle_id").is(":hover"))
//                 loopit("c");
//             else
//                 loopit("nc");
//         },1);
//
//     }
//
//
//
//
//
//
//
//
//
//
