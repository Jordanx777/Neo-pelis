const api_key = 'api_key=11ea32f427c2b6ca23c5a5615a8aca5e';
const base_url = 'https://api.themoviedb.org/3';
const api_url = base_url + '/discover/movie?sort_by=popularity.desc&' + api_key;
const img_peli = 'https://image.tmdb.org/t/p/w500';
const main = document.getElementById('main');
const buscarURL = base_url + '/search/movie?' + api_key;
const search = document.getElementById('buscar');
const form = document.getElementById('form');

getMovies(api_url);

function getMovies(url) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data.results);
            showMovies(data.results);
        });
}

function showMovies(data) {
    main.innerHTML = '';

    data.forEach(movie => {
        const { title, poster_path, vote_average, overview, release_date, id } = movie;
        const peli = document.createElement('div');
        peli.classList.add('movie');
        peli.innerHTML = `<img src="${img_peli + poster_path}" alt="${title}">
        <h4>${title}</h4>
        <button class="ver_trailer" id="${id}">ver trailer</button>`;

        main.appendChild(peli);

        document.getElementById(id).addEventListener('click', () => {
            openNav(movie);
            console.log(id);
        });
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const searchTerm = search.value;
        if (searchTerm) {
            getMovies(buscarURL + '&query=' + searchTerm);
        }
    });
}

function openNav(movie) {
    
    const id = movie.id;
    let embed = '';
    
    fetch(base_url + '/movie/' + id + '/videos?' + api_key)
        .then(res => res.json())
        .then(videoData => {
            console.log(videoData);
            if (videoData.results && videoData.results.length > 0) {
                for (let video of videoData.results) {
                    const { name, key, site, type } = video;
                    if (site === 'YouTube') {
                        if (type === 'Trailer') {
                            embed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}"
                            title="${name}" frameborder="0" allow="accelerometer; autoplay;
                            clipboard-write; encrypted-media; gyroscope;
                            picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
                            break; // Salir del bucle después de encontrar el primer trailer
                        } else if (type === 'Teaser') {
                            embed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}"
                            title="${name}" frameborder="0" allow="accelerometer; autoplay;
                            clipboard-write; encrypted-media; gyroscope;
                            picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
                        }
                    }
                }
            }
            
            if (!embed && videoData.results && videoData.results.length > 0) {
                const { name, key } = videoData.results[0];
                embed = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${key}"
                        title="${name}" frameborder="0" allow="accelerometer; autoplay;
                        clipboard-write; encrypted-media; gyroscope;
                        picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
            }
            
            if (!embed) {
                embed = '<p>No hay trailer disponible</p>';
            }
            
            document.getElementById("overlay-content").innerHTML = embed;
            document.getElementById("myNav").style.width = "100%";
        });
}


document.getElementById('btnCerrar').addEventListener('click', () => {
    document.getElementById('myNav').style.width = "0%";
});



/*backdrop_path */