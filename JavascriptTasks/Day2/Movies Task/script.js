const API_KEY = '4d7ef8a06c65d0b81f3ff4f73db66e0c'; 
const API_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const moviesContainer = document.getElementById('movies-container');

async function getTrendingMovies() {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayMovies(data.results);
}

function displayMovies(movies) {

    movies.forEach(movie => {

        const { title, poster_path, vote_average, overview } = movie;
    
        const rating = vote_average.toFixed(1);

        const movieCard = document.createElement('div');
        movieCard.classList.add('col');

        movieCard.innerHTML = `
            <div class="card h-100 border-0" style="background-color: #2b2b2b; color: #fff;">
                <img src="${IMG_PATH + poster_path}" class="card-img-top" alt="${title} poster" >
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title fw-bold">${title}</h5>
                    <p class="card-text text-light opacity-75" style="font-size: 0.9rem;">
                        ${overview}
                    </p>
                    <div class="mt-auto">
                        <span class="badge bg-warning text-dark fs-6 rounded-1 px-2 py-1">${rating}</span>
                    </div>
                </div>
            </div>
        `;
        moviesContainer.appendChild(movieCard);
    });
}
getTrendingMovies();