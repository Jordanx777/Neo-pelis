/* fetch("https://api.nekosapi.com/v3/characters", {
    method: "GET",
}).then(res => res.json())
.then(data => {
    console.log(data);
}) */

fetch("https://api.nekosapi.com/v3/images", {
    method: "GET",
}).then(res => res.json())
.then(data => {
    console.log(data);
    mostrarAnimes(data.items);
})
const swiperCampo = document.getElementById('campoSlider');
function mostrarAnimes(animes) {
    swiperCampo.innerHTML = "";
    animes.forEach(anime => {
        const {image_url, id, color_domainant} = anime;
        const swiperSlider = document.createElement("div");
        swiperSlider.classList.add('swiper-slide');
        swiperSlider.innerHTML = `<div class="box">
        <img style="width: 100%; height: 100%;" src="${image_url}" alt="">
        </div>`;
        swiperCampo.appendChild(swiperSlider);
    });
}

/* Swiper */
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

  var swiper = new Swiper(".anime-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });


  var swiper = new Swiper(".action-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });


  var swiper = new Swiper(".child-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  var swiper = new Swiper(".family-slider", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });
/* cierre swwiper */