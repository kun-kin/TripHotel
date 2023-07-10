$(window).scroll(function() {
    var headerHeight = $(".header").outerHeight();
    // kiểm tra điều kiện > header thì mới addClass 
    if ($(window).scrollTop() > headerHeight) {
        $('.header').addClass('affix');
    } else {
        $('.header').removeClass('affix');
    }

    //scroll to div
    // if ($(this).scrollTop() >= $('.navigator').offset().top) {
    //     $('.navigator-container').addClass('fixed');
    //     $('.navigator-logo').show();
    // } else {
    //     $('.navigator-container').removeClass('fixed');
    //     $('.navigator-logo').hide();
    // }
});


/* back to top */
var btn = $('#backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '1000');
});




$(document).ready(function() {

    $('#datepicker12').flatpickr({
        dateFormat: "d/m/Y"
    });

    $('#checkin').flatpickr({
        dateFormat: "d/m/Y"
    });
    $('#checkout').flatpickr({
        dateFormat: "d/m/Y"
    });
    $('#checkIn').flatpickr({
        dateFormat: "d/m/Y"
    });
    $('#checkOut').flatpickr({
        dateFormat: "d/m/Y"
    });

    $("#oneway").on("click", function(e) {
        $(this).addClass('active');
        $('#roundtrip').removeClass('active');
        $('#checkOut').prop('disabled', true);
    })
    $("#roundtrip").on("click", function(e) {
        $(this).addClass('active');
        $('#oneway').removeClass('active');
        $('#checkOut').prop('disabled', false);
    })

    $(".mobile-toggle").on("click", function(e) {
        $(this).toggleClass('active');
        $('.navbar').toggleClass('active');
        $('body').toggleClass('ov-hidden');

    })
    $(".close-mobile-menu").on("click", function(e) {
        $('.mobile-toggle').removeClass('active');
        $('.navbar').removeClass('active');
        $('body').removeClass('ov-hidden');

    })

    // // mobile-menu
    // $(".nav-toggle").on("click", function(e) {
    //     e.preventDefault(),
    //         $("#navbar").hasClass("nav-active") ? (
    //             $(this).removeClass("nav-active"),
    //             $("#navbar").removeClass("nav-active"),
    //             $("body").removeClass("ov-hidden")) : (
    //             $(this).addClass("nav-active"),
    //             $("#navbar").addClass("nav-active"),
    //             $("body").addClass("ov-hidden")
    //         )
    // })

    // $("li.main-dropdown span.toggle-mobile-submenu").on("click", function(e) {
    //     e.preventDefault(),
    //         e.stopPropagation(),
    //         $(this).parent().parent().hasClass("open") ? $(this).parent().parent().removeClass("open") : $(this).parent().parent().addClass("open")
    // })


    //-----JS for hero-accordion-----

    // var n = $(".hero-accordion .panel-heading").prev().addClass("active");
    // n.find("a > i").toggleClass("icon-plus"),
    //     n.find("a > span").toggleClass("icon-plus"),
    //     $(".hero-accordion").on("show.bs.collapse", function(e) {
    //         $(".hero-accordion .panel-heading").removeClass("active"),
    //             $(".hero-accordion .panel-heading").find(".more-less-icon").removeClass("icon-minus").addClass("icon-plus"),
    //             $(e.target).prev().addClass("active").find(".more-less-icon").removeClass("icon-plus").addClass("icon-minus")
    //     }),
    //     $(".hero-accordion").on("hide.bs.collapse", function(e) {
    //         $(e.target).prev().find(".more-less-icon").removeClass("icon-minus").addClass("icon-plus")
    //     })


    //-----JS for Price Range slider-----

    $(function() {
        $("#slider-range").slider({
            range: true,
            min: 0,
            max: 70000000,
            values: [0, 70000000],
            slide: function(event, ui) {
                $("#amount").val(ui.values[0] + "VND - " + ui.values[1] + "VND");
            }
        });
        $("#amount").val($("#slider-range").slider("values", 0) + "VND  - " +
            $("#slider-range").slider("values", 1) + "VND");
    });

    $(".tour-itinerary .tour-itinerary-item .tour-itinerary-head").on("click", function(e) {
        $(this).toggleClass('active');
        $(this).parents('.tour-itinerary-item').children('.tour-itinerary-content').slideToggle();

    })


});