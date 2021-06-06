

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
/*
$document.ready(function(){
  if($(".swiper-slide").click){
    $(this).addClass("swiper-slide_open");
    $(this).children(".book_container").addClass("book_container_open");
    $(this).children(".card_open").addClass(".card_open");
    $(this).children(".card_open").children(".slider-text").addClass(".slider-text_open");
  }
})
*/
$(document).ready(function(){
  

  $(".swiper-slide").click(function(){
    $(this).toggleClass("swiper-slide_open");
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

 /* $(".cross").click(function(){
    
    $(this).parent(".swiper-slide_open").css("display","none").removeClass().addClass("swiper-slide").css("display","flex");
    $("contenu_textuel").css("display","none");
    /*$(this).parent().children(".book_container_open").removeClass().addClass("book_container");
    $(this).parent().children(".card_open").removeClass().addClass("card");
    $(this).parent().children(".card").children(".slider-text_open").removeClass().addClass("slider-text");      
    $(this).parent().children(".card").children(".slider-categorie_open").removeClass().addClass("slider-categorie");
    $(this).parent().children(".card").children(".slider-categorie").children(".imgInContent").css("display","none");
    $(this).parent().children(".card").children(".slider-categorie").children(".imgInBanner").css("display","block");
    $(this).css("display","none");*/
    console.log("hello");
       

 // });
 
})


$( document ).ready(function() {
     var el = document.querySelector('.like_button'),
    // mo.js timeline obj
    timeline = new mojs.Timeline(),
  
    // tweens for the animation:
  
    // burst animation
  
  
    tween3 = new mojs.Burst({
    parent: el,
    radius:   { 0: 100 },
    angle:    { 0: -45 },
    y: -10,
    count:    10,
     radius:       125,
    children: {
      shape:        'circle',
      radius:       30,
      fill:         [ 'pink', 'red' ],
      strokeWidth:  15,
      duration:     400,
    }
    });
  
  // add tweens to timeline:
  timeline.add(tween3);
  
  timeline.play()
  
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
 
 
  
  });

//transform: rotateY(180deg);