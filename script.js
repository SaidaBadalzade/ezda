const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})
const toggle = document.querySelector('.toggle');

toggle.addEventListener('click', () => {
  var x = document.querySelector(".menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
)
const btn = document.querySelector('.show-video');
const videoContainer = document.querySelector('.video-conainer');
const closev = document.querySelector('.closev');
btn.addEventListener('click', ()=>{
var x = document.querySelector(".modalv");
if (x.style.display === "block") {
x.style.display = "none";
} else {
x.style.display = "block";
}
}
)
closev.addEventListener('click', () => {
var x = document.querySelector(".modalv");
if (x.style.display === "block") {
x.style.display = "none";
} else {
x.style.display = "block";
}
}
)
// Modal Setup
var modal = document.getElementById('modal');

var modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});

// global handler
document.addEventListener('click', function (e) { 
  if (e.target.className.indexOf('modal-target') !== -1) {
      var img = e.target;
      var modalImg = document.getElementById("modal-content");
      var captionText = document.getElementById("modal-caption");
      modal.style.display = "block";
      modalImg.src = img.src;
    //   captionText.innerHTML = img.alt;
   }
});

/************************/
$(document).ready(function () {
$(".customer-logos").slick({
slidesToShow: 6,
slidesToScroll: 1,
autoplay: true,
autoplaySpeed: 1500,
arrows: false,
dots: false,
pauseOnHover: false,
responsive: [
 {
   breakpoint: 768,
   settings: {
     slidesToShow: 4
   }
 },
 {
        
    breakpoint: 520,
    settings: {
      slidesToShow: 3
    }
  }
]
});
});

/*************** image gallery **********/
$(document).ready(function(){
  $("img").click(function(){
  var t = $(this).attr("src");
  $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
  $("#myModal").modal();
});
})

/****************** slide duplicate ************************/
var copy = document.querySelector(".partners-slide").cloneNode(true);
document.querySelector(".partners").appendChild(copy);

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});