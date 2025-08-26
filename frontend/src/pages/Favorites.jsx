import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const { favorites } = useMovieContext();
  if (favorites) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="movies-grid">
          {favorites.map(
            (movie) => (
                <MovieCard movie={movie} key={movie.id} />
              )
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="favorites-empty">
        <h2>No Favourites Added</h2>
        <p>You have not added any movies to your favourites yet.</p>
        <p>Start adding movies to your favourites and they will appear here</p>
      </div>
    );
  }
}

export default Favourites;
