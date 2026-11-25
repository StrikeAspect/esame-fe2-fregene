import { useEffect, useState } from "react";
import { MovieCard } from "../components/MovieCard";
import type { MovieSearchResponse, MovieSummary } from "../types/movie";

// pagina principale che carica e mostra l'elenco fisso di The Lord of the Rings
export function MovieListPage() {
  const [movies, setMovies] = useState<MovieSummary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    // La pagina dei film con la query fissa richiesta dalla traccia
    async function fetchMovies() {
      if (!apiKey) {
        setError("API Key TMDB mancante nel file .env.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const url = `https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Errore nel caricamento dei film.");
        }

        const data: MovieSearchResponse = await response.json();
        setMovies(data.results.slice(0, 20));
      } catch {
        setError("Impossibile caricare l'elenco dei film.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  let contenuto;

  if (loading) {
    contenuto = <p className="note">Caricamento film in corso...</p>;
  } else if (error) {
    contenuto = <p className="note">{error}</p>;
  } else {
    contenuto = (
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }

  return (
    <>
      <h1 className="page-title">The Lord of the Rings</h1>
      <p className="page-sub">
        Risultati fissi da API · query=The Lord of the Rings · page=1 · max 20
        items · senza filtri / paginazione
      </p>
      {contenuto}
    </>
  );
}
