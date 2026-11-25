import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Poster } from "../components/Poster";
import type { MovieDetail } from "../types/movie";

// Definisco la pagina di dettaglio del singolo film letta tramite parametro id nell'URL
export function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_TMDB_API_KEY;

    // Recupero i dettagli del film scelto dall'endpoint TMDB in base all'id nella URL
    async function fetchMovieDetail() {
      if (!id) {
        setError("ID del film mancante.");
        setLoading(false);
        return;
      }

      if (!apiKey) {
        setError("API Key TMDB mancante nel file .env.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Errore nel caricamento del dettaglio.");
        }

        const data: MovieDetail = await response.json();
        setMovie(data);
      } catch {
        setError("Impossibile caricare i dettagli del film.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetail();
  }, [id]);

  let contenuto;

  if (loading) {
    contenuto = <p className="note">Caricamento dettagli in corso...</p>;
  } else if (error || !movie) {
    contenuto = <p className="note">{error || "Film non trovato."}</p>;
  } else {
    const dataUscita = movie.release_date
      ? movie.release_date.split("-").reverse().join("/")
      : "N/D";
    const durata = movie.runtime ? `${movie.runtime} min` : "N/D";
    const voto =
      typeof movie.vote_average === "number"
        ? movie.vote_average.toFixed(1)
        : "N/D";
    const voti =
      typeof movie.vote_count === "number"
        ? movie.vote_count.toLocaleString("it-IT")
        : "N/D";
    const lingua =
      movie.spoken_languages && movie.spoken_languages.length > 0
        ? movie.spoken_languages[0].english_name || movie.spoken_languages[0].name
        : movie.original_language || "N/D";
    const produzione =
      movie.production_companies && movie.production_companies.length > 0
        ? movie.production_companies.map((company) => company.name).join(" · ")
        : "N/D";

    contenuto = (
      <article className="detail">
        <div>
          <Poster
            posterPath={movie.poster_path}
            title={movie.title}
            className="detail__poster"
          />
        </div>

        <div>
          <h1 className="detail__title">{movie.title}</h1>
          {movie.tagline && (
            <p className="detail__tagline">“{movie.tagline}”</p>
          )}

          <ul className="detail__meta">
            <li>Uscita: {dataUscita}</li>
            <li>Durata: {durata}</li>
            <li>Voto: {voto}</li>
            <li>Voti: {voti}</li>
            <li>Stato: {movie.status || "N/D"}</li>
            <li>Lingua: {lingua}</li>
          </ul>

          <div className="detail__genres">
            {movie.genres.map((genre) => (
              <span className="genre" key={genre.id}>
                {genre.name}
              </span>
            ))}
          </div>

          <p className="detail__overview-label">Trama</p>
          <p className="detail__overview">
            {movie.overview || "Trama non disponibile."}
          </p>

          <p className="card__meta">Produzione: {produzione}</p>
        </div>
      </article>
    );
  }

  return (
    <>
      <Link className="back-link" to="/">
        ← Torna all’elenco
      </Link>
      {contenuto}
    </>
  );
}
