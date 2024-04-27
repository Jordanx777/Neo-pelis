const api_key = "api_key=11ea32f427c2b6ca23c5a5615a8aca5e";
const base_url = "https://api.themoviedb.org/3";
const api_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api_key;
const img_peli = "https://image.tmdb.org/t/p/w500";
const img_peli2 = "https://image.tmdb.org/t/p/original";
const main = document.getElementById("main");
const buscarURL = base_url + "/search/movie?" + api_key;
const search = document.getElementById("buscar");
const form = document.getElementById("form");
const banner = document.getElementById("banner");
const genres = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 10770, name: "TV Movie" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" },
  { id: 37, name: "Western" },
];
const tagsEl = document.getElementById("tags");

var selectgenere = [];
setGenere();
function setGenere() {
  tagsEl.innerHTML = "";
  genres.forEach((genre) => {
    const t = document.createElement("div");
    t.classList.add("tag");
    t.id = genre.id;
    t.innerText = genre.name;
    t.addEventListener("click", () => {
      if (selectgenere.length == 0) {
        selectgenere.push(genre.id);
        t.classList.add('seleccionado');
      } else {
        if (selectgenere.includes(genre.id)) {
          selectgenere.forEach((id, idx) => {
            if (id == genre.id) {
              selectgenere.splice(idx, 1);
              t.classList.remove('seleccionado');
            }
          });
        } else {
          selectgenere.push(genre.id);
          t.classList.add('seleccionado');
        }
      }
      console.log(selectgenere);
      getMovies(api_url + "&with_genres=" + encodeURI(selectgenere.join(",")));
    });

    tagsEl.append(t);
  });
}

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
        <div class="flex-banner"><input type="button" class="ver_trailer" data-id="${id}" value="Trailer"><input type="button" class="ver_trailer_p" data-id="${id}" value="Prueba">
       <a href="#banner" data-id="${id}" class="ver_trailer_banner">Escena</a>
        </div>
        `;
    /* <input type="button" class="ver_trailer_banner" data-id="${id}" value="Esce">*/
    main.appendChild(peli);
    peli.querySelector(".ver_trailer_banner").addEventListener("click", (e) => {
      const idPelicula = e.target.getAttribute("data-id");

      bannerImg(idPelicula);
    });
    peli.querySelector(".ver_trailer_p").addEventListener("click", (e) => {
      const idPelicula = e.target.getAttribute("data-id");
      videoS(idPelicula);
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
        original_language,
      } = movieData;

      document.documentElement.style.setProperty(
        "--imgBanner",
        `url(${img_peli2 + backdrop_path})`
      );
      banner.classList.add("banner");
      /* banner.style.background = `url(${img_peli + backdrop_path})`; */

      banner.innerHTML = `
        <div class="content active">
          
        
        <h1 class="titulo-pelicula">${title}</h1>
        <!--<img src="${
          img_peli + poster_path
        }" class="title-peli" alt="${title}">-->
          
          <p id="overvie">${overview}</p>
          <h4 id="califi">
            <span>${release_date} </span>
            <span class="${getColor(vote_average)}" >${vote_average}</span>
            <span>${original_language}</span>
           
            <!--<span>genero</span>-->
          </h4>
          
          <div class="button">
            <a href="#">boton de play</a>
            <a href="#">boton plus</a>
          </div>
        </div>
      `;
    });

  function getColor(vote) {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }
}

$("#buscar").keyup(function () {
  const searchTerm = $(this).val();
  if (searchTerm) {
    getMovies(buscarURL + "&query=" + searchTerm);
  }
});

/* Funcion de los trailers */
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
          height: "630",
          width: "1120",
          videoId: videoKey,
          playerVars: {
            autoplay: 1,
            controls: 0,
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
/* video */
function onPlayerReady(event) {}
/* funcion para los estados del video, como pausar */
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
/* cierre de funcion del video */
document.getElementById("btnCerrar").addEventListener("click", () => {
  if (player) {
    player.pauseVideo();
    document.getElementById("myNav").style.width = "0%";
  }
  document.getElementById("myNav").style.width = "0%";
});

/* scrool para arriba */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        behavior: "smooth",
        top: targetSection.offsetTop,
      });
    }
  });
});
/* cierre de scroll */
