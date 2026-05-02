import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext.jsx";



function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img
                    src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://placehold.co/600x900/2f2f2f/f2e8dc?text=${encodeURIComponent(movie.title)}`}
                    alt={movie.title}
                />
                <div className="movie-overlay">
                    {/* Add an 'active' class if it is a favorite for styling */}
                    <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                        {favorite ? "❤️" : "🤍"}
                    </button>
                </div>
            </div>
            {/* ... rest of your info div */}
        </div>
    );
}
export default MovieCard;