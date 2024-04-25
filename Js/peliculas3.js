const api_key = "api_key=11ea32f427c2b6ca23c5a5615a8aca5e";
const base_url = "https://api.themoviedb.org/3";
const api_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api_key;
const img_peli = "https://image.tmdb.org/t/p/w500";
const main = document.getElementById("main");
const buscarURL = base_url + "/search/movie?" + api_key;
const search = document.getElementById("buscar");
const form = document.getElementById("form");
const banner = document.getElementById("banner");

getMovies(api_url);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showMovies(data.results);
    });
}

function showMovies(data) {
  main.innerHTML = "";

  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview, release_date, id } =
      movie;
    const peli = document.createElement("div");
    peli.classList.add("movie");
    peli.innerHTML = `<img src="${img_peli + poster_path}" alt="${title}">
        <h4>${title}</h4>
        <div class="flex-banner"><input type="button" class="ver_trailer" data-id="${id}" value="Trailer">
       <a href="#banner" data-id="${id}" class="ver_trailer_banner">Escena</a>
        </div>
        `;
 /* <input type="button" class="ver_trailer_banner" data-id="${id}" value="Esce">*/
    main.appendChild(peli);
    peli.querySelector(".ver_trailer_banner").addEventListener("click", (e) => {
      const idPelicula = e.target.getAttribute("data-id");
      
      bannerImg(idPelicula);
    });
    peli.querySelector(".ver_trailer").addEventListener("click", (e) => {
      openNav(movie);
      console.log(movie.id);
    });
  });
}

function bannerImg(id) {
  fetch(base_url + "/movie/" + id + "?" + api_key)
    .then((res) => res.json())
    .then((movieData) => {
      console.log(movieData);
      const {
        title,
        poster_path,
        vote_average,
        backdrop_path,
        overview,
        release_date,
      } = movieData;
     
      document.documentElement.style.setProperty('--imgBanner', `url(${img_peli + backdrop_path})`);
      banner.classList.add("banner");
      /* banner.style.background = `url(${img_peli + backdrop_path})`; */

      banner.innerHTML = `
        <div class="content active">
          <img src="${
            img_peli + poster_path
          }" class="title-peli" alt="${title}">
          <h4 id="califi">
            <span>${release_date} </span>
            <span>12+</span>
            <span>2h 14min</span>
            <span>genero</span>
          </h4>
          <p id="overvie">${overview}</p>
          <div class="button">
            <a href="#">boton de play</a>
            <a href="#">boton plus</a>
          </div>
        </div>
      `;
    });
}

$("#buscar").keyup(function () {
  const searchTerm = $(this).val();
  if (searchTerm) {
    getMovies(buscarURL + "&query=" + searchTerm);
  }
});

let player;
let videoKey;

function openNav(movie) {
  const id = movie.id;
  let embed = "";

  fetch(base_url + "/movie/" + id + "/videos?" + api_key)
    .then((res) => res.json())
    .then((videoData) => {
      console.log(videoData);
      if (videoData.results && videoData.results.length > 0) {
        for (let video of videoData.results) {
          const { name, key, site, type } = video;
          if (site === "YouTube") {
            if (type === "Trailer") {
              embed = `<div id="player"></div>`;
              videoKey = key;
              break;
            } else if (type === "Teaser") {
              embed = `<div id="player"></div>`;
              videoKey = key;
            }
          }
        }
      }

      if (!embed && videoData.results && videoData.results.length > 0) {
        const { name, key } = videoData.results[0];
        embed = `<div id="player"></div>`;
        videoKey = key;
      }

      if (!embed) {
        embed = "<p>No hay trailer disponible</p>";
      }

      document.getElementById("overlay-content").innerHTML = embed;
      document.getElementById("myNav").style.width = "100%";

      if (embed.includes("player")) {
        player = new YT.Player("player", {
          height: "315",
          width: "560",
          videoId: videoKey,
          playerVars: {
            autoplay: 1,
            controls: 1,
            rel: 0,
            modestbranding: 1,
          },
          events: {
            onReady: onPlayerReady,
            onStateChange: onPlayerStateChange,
          },
        });
      }
    });
}

function onPlayerReady(event) {}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PAUSED) {
    Swal.fire({
      title: "Quieres dejar de ver el video?",
      showCancelButton: true,
      confirmButtonText: "Salir",
      cancelButtonText: `Seguir viendo`,
    }).then((result) => {
      if (result.isConfirmed) {
        document.getElementById("myNav").style.width = "0%";
      }
    });
  }
}

document.getElementById("btnCerrar").addEventListener("click", () => {
  if (player) {
    player.pauseVideo();
  }
});



/* scrool para rriba */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
     e.preventDefault();

     const targetId = this.getAttribute('href').substring(1);
     const targetSection = document.getElementById(targetId);

     if (targetSection) {
        window.scrollTo({
           behavior: 'smooth',
           top: targetSection.offsetTop,
        });
     }
  });
});
/*  */