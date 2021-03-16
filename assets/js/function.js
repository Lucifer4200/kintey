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

 //product slider activetion
var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
        575: {
        slidesPerView: 4,
        }
    },
});
var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    autoplay: true,
    navigation: {
    nextEl: '.product-button-next',
    prevEl: '.product-button-prev',
    },
    thumbs: {
    swiper: galleryThumbs
    }
});

// product responsive slider 
var mySwiper14 = new Swiper('.swiper-responsive-breakpoints', {
    slidesPerView: 1,
    spaceBetween: 55,
    autoplay : {
        delay : 5000,
        disableOnInteraction: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1300: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 55,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      }
    }
  });

  // product color options
    document.addEventListener("DOMContentLoaded", function(event) { // <-- add this wrapper
    var navitem = document.querySelectorAll('.nav-item');
    
        if (navitem) {
        
        navitem.forEach(function(el, key){
            
            el.addEventListener('click', function () {
                console.log(key);
            
                el.classList.toggle("active");
                
                navitem.forEach(function(ell, els){
                    if(key !== els) {
                        ell.classList.remove('active');
                    }
                    console.log(els);
                });
            });
        });
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
