import React, { useEffect, useState } from "react";
import "../css/Home.css";
import MovieCard from "../components/MovieCard";
import {
  getTrendingMovies,
  getNowPlayingMovies,
  getMoviesByGenre,
  searchMovies,
} from "../services/api";

const GENRES = {
  Action: 28,
  Drama: 18,
};

function MovieRow({ title, movies, large }) {
  return (
    <section className="movie-row-section">
      <h2 className="row-title">{title}</h2>
      <div className={`movie-row${large ? " large-row" : ""}`}>
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} large={large} />
        ))}
      </div>
    </section>
  );
}

function Home() {
  const [hero, setHero] = useState(null);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [action, setAction] = useState([]);
  const [drama, setDrama] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAll() {
      setLoading(true);
      try {
        const [trendingRes, nowPlayingRes, actionRes, dramaRes] = await Promise.all([
          getTrendingMovies(),
          getNowPlayingMovies(),
          getMoviesByGenre(GENRES.Action),
          getMoviesByGenre(GENRES.Drama),
        ]);
        setTrending(trendingRes);
        setNowPlaying(nowPlayingRes);
        setAction(actionRes);
        setDrama(dramaRes);
        setHero(trendingRes[0]);
      } catch (e) {
        setError("Failed to load movies.");
      }
      setLoading(false);
    }
    fetchAll();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setSearchLoading(true);
    setError(null);
    try {
      const results = await searchMovies(searchQuery);
      setSearchResults(results);
    } catch {
      setError("Failed to search movies.");
    }
    setSearchLoading(false);
  };

  // Clear search results if searchQuery is cleared
  useEffect(() => {
    if (!searchQuery.trim()) setSearchResults([]);
  }, [searchQuery]);

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form" style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          className="search-input"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {error && <div className="error-message">{error}</div>}
      {hero && (
        <div
          className="hero-section"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(20,20,20,0.9) 60%, rgba(20,20,20,0.3) 100%), url(https://image.tmdb.org/t/p/original${hero.backdrop_path})`,
          }}
        >
          <div className="hero-content">
            <h1 className="hero-title">{hero.title}</h1>
            <p className="hero-desc">{hero.overview}</p>
            <div className="hero-buttons">
              <button className="hero-btn primary">Watch Now</button>
              <button className="hero-btn secondary">Add to List</button>
            </div>
          </div>
        </div>
      )}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <>
          {searchResults.length > 0 && (
            <MovieRow title={`Search Results for "${searchQuery}"`} movies={searchResults} large />
          )}
          <MovieRow title="Trending" movies={trending} large />
          <MovieRow title="New Releases" movies={nowPlaying} />
          <MovieRow title="Action" movies={action} />
          <MovieRow title="Drama" movies={drama} />
        </>
      )}
      {searchLoading && <div className="loading">Searching...</div>}
    </div>
  );
}

export default Home;