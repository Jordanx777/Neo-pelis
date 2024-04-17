    const api_key = 'api_key=11ea32f427c2b6ca23c5a5615a8aca5e';
    const base_url = 'https://api.themoviedb.org/3';
    const api_url = base_url + '/discover/movie?sort_by=popularity.desc&'+ api_key;
    const img_peli = 'https://image.tmdb.org/t/p/w500'; 
    const main =  document.getElementById('main')
    const buscarURL = base_url + '/search/movie?' + api_key

    const search = document.getElementById('buscar')
    const form = document.getElementById('form')

    getMovies(api_url);

    function getMovies(url){
        fetch(url).then(res => res.json()).then(data => {
            console.log(data.results);
            showMovies(data.results);
        })
    }

    function showMovies(data){

        main.innerHTML = '';

        data.forEach(movie => {
            const {title, poster_path, vote_average , overview} = movie;
            const peli = document.createElement('div');
            peli.classList.add('movie');
            peli.innerHTML = `<img src="${img_peli + poster_path}" alt="${title}">
            <h4>${title}</h4>`


            main.appendChild(peli);
    
        })


        form.addEventListener('submit', (e) => {
            e.preventDefault();
    
            const searchTerm = search.value;
    
            if(searchTerm) {
                getMovies(buscarURL +'&query='+ searchTerm)
            }
        })    

    }


   