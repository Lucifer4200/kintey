 //Initialize Swiper
var swiper = new Swiper('.req-container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    mousewheel: true,
    keyboard: true,
});

// weekly products slider
var swiper = new Swiper('.weekly-slider', {
    slidesPerView: 2,
    navigation: {
        nextEl: '.weekly-button-next',
        prevEl: '.weekly-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        425: {
            slidesPerView: 2,
        }
    },
});

// buyer products slider
var swiper = new Swiper('.buyer-slider', {
    slidesPerView: 2,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true,
    },
    navigation: {
        nextEl: '.buyer-button-next',
        prevEl: '.buyer-button-prev',
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 3,
        },
        576: {
            slidesPerView: 2,
        },
        425: {
            slidesPerView: 2,
        }
    },
});

//sponser slider activation
var swiper = new Swiper('.brand-slider', {
    slidesPerView: 2,
    speed:1000,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    loop: true,
    freeMode: true,
    breakpoints: {
        1024: {
            slidesPerView: 6,
        },
        768: {
            slidesPerView: 4,
        },
        576: {
            slidesPerView: 2,
        },
        425: {
            slidesPerView: 2,
        }
    }
});

// Theme switcher
$(document).ready(function(){
    $(".theme-switcher").click(function(){
    $(this).text(function(i, v){
      return v === 'light' ? 'dark' : 'light'
    });
    });
});

(function() {
  $('.theme-switcher').click(function() {
    $('#theme').toggleClass('dark');
  });
})();