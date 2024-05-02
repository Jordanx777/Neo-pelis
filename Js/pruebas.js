

/*  */

/* const settings = {
	async: true,
	crossDomain: true,
	url: 'https://tvshow.p.rapidapi.com/Serie/Search?Language=en-US&Content=Game&Adult=false&Page=1',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '057b681ee8mshff6b7887657b830p1c3452jsna6697ee0eea0',
		'X-RapidAPI-Host': 'tvshow.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
}); */
/* 
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://netflix54.p.rapidapi.com/season/episodes/?ids=80077209%2C80117715&offset=0&limit=25&lang=en',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '057b681ee8mshff6b7887657b830p1c3452jsna6697ee0eea0',
		'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
}); */


/* funciones para guardar */
/*function showMovies(data) {
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
    /* <input type="button" class="ver_trailer_p" data-id="${id}" value="Prueba"> */
/* <input type="button" class="ver_trailer_banner" data-id="${id}" value="Esce">*/
/*main.appendChild(peli);
    peli.querySelector(".ver_trailer_banner").addEventListener("click", (e) => {
      const idPelicula = e.target.getAttribute("data-id");
      bannerImg(idPelicula);
    });
    peli.querySelector(".ver_trailer").addEventListener("click", (e) => {
      openNav(movie);
      console.log(movie.id);
    });
  });
}*/

/* cierre de funciones */
