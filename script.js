let menubar = document.querySelector("#menu-bar");
let narbar = document.querySelector(".narbar");
menubar.addEventListener("click", function() {
    narbar.classList.toggle("show");
    menubar.classList.toggle("fa-times");
});

$(window).on('scroll load', function(){

    $('#menu-bar').removeClass('fa-times');
    $('.narbar').removeClass('nav-toggle');

    // scroll spy

    $('section').each(function(){

        let top = $(window).scrollTop();
        let offset = $('this').offset().top -200;
        let height = $('this').height();
        let id = $('this').attr('id');

        if(top > offset && top < offset + height){
            $('.narbar ul li a').removeClass('active');
            $('.narbar').find(`[herf="#${id}"]`).addClass('active');
        }

    });

});

$('.menu .list .btn').click(function(){

    $(this).addClass('active').siblings().removeClass('active');
    

    let src = $(this).attr('data-src');

    $('#menu-img').attr('src', src);

});