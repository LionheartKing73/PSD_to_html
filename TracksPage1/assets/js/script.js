jQuery(function($){

    $('.statistic .number span').counterUp({
        delay: 10, // the delay time in ms
        time: 2500 // the speed time in ms
    });

    $("#gallery").lightGallery({
        thumbMargin : 0,
    }); 

    $('#reviews').lightSlider({
        item: 1,
        loop: false,
        pager: false,
        auto: true,
        loop: true,
        pause: 5000
    });

    $('.open-nav-btn button').click(function(){
        $('#main-nav-mobile').slideToggle();
        return false;
    });

    $(".item-scroll").click(function() {
        var scrollTo = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(scrollTo).offset().top},
            'slow');
        return false;
    });


})