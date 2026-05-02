// Use your Client ID here (the long string you labeled as API_KEY)
const CLIENT_ID = "a0bf4cf398ae84285f0e004bd166801a361c126276c5413323c9903e36ee8a61";
const BASE_URL = "https://api.trakt.tv";

const HEADERS = {
    "Content-Type": "application/json",
    "trakt-api-version": "2",
    "trakt-api-key": CLIENT_ID
};

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movies/popular`, {
        headers: HEADERS
    });

    const data = await response.json();

    // Trakt returns data differently than TMDB. 
    // We map it here so your MovieCard doesn't break.
    return data.map(movie => ({
        id: movie.ids.trakt,
        title: movie.title,
        release_date: movie.year?.toString(),
        poster_path: null // Trakt doesn't provide images!
    }));
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(query)}`, {
        headers: HEADERS
    });

    const data = await response.json();

    // Trakt search results wrap the movie object inside a 'movie' property
    return data.map(item => ({
        id: item.movie.ids.trakt,
        title: item.movie.title,
        release_date: item.movie.year?.toString(),
        poster_path: null
    }));
};