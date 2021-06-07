// slider
var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 10,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });

  //menu
const btn = document.querySelector("#btn");
const item = document.querySelectorAll(".menu__item");

let showCard = (event) => {
    btn.classList.toggle("is-rotate");
    for (var i = 0; i < item.length; i++) {
        item[i].classList.toggle(`item-${i}`);
    }
}

btn.addEventListener("click", showCard);

// bloquer le scroll

window.addEventListener("scroll", function (e){
	
	window.scrollTo(0,0);
	
}, false);

//open card

//card reverse
$(document).ready(function(){
  

  $(".swiper-slide").click(function(){
    $(this).toggleClass("swiper-slide_open");
    $(this).find(".img_content").toggleClass("img_content_open");
    $(this).find(".book_container").toggleClass("book_container_open");
    $(this).find(".card").toggleClass("card_open").find(".slider-text").toggleClass("slider-text_open")
    .find(".contenu_textuel").toggleClass("contenu_textuel_open");
    $(this).find(".slider-categorie").toggleClass("slider-categorie_open");
    $(this).find(".cross").toggleClass("cross_open");
    
    if($(".swiper-slide-active").hasClass('liked_active')){
      $(".like_button").removeClass('active');
      $(".like_button").addClass('active');
    }
    else{
      $(".like_button").removeClass('active');
    }
    
  });

 
 
})


  //like bouton
  // when clicking the button start the timeline/animation:
  $( ".like_button" ).click(function() {
    if ($(this).hasClass('active') && $(".swiper-slide").hasClass('liked_active')|| !$(".swiper-slide").hasClass('swiper-slide_open')){
      $(this).removeClass('active');
      $(".swiper-slide-active").removeClass('liked_active')
    }
   else{
   ;
    $(this).addClass('active');
    $(".swiper-slide-active").addClass('liked_active');
    $(".swiper-slide-active").addClass('.swiper-slide_open_like');
    }
    
  });
 
 
  
  

//transform: rotateY(180deg);