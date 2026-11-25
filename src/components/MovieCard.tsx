import { Link } from "react-router-dom";
import type { MovieCardProps } from "../types/movie";
import { Poster } from "./Poster";

// una singola scheda film dell'elenco usando i dati ricevuti via props
export function MovieCard({ movie }: MovieCardProps) {
  const dataUscita = movie.release_date
    ? movie.release_date.split("-").reverse().join("/")
    : "N/D";

  return (
    <article className="card">
      <Poster posterPath={movie.poster_path} title={movie.title} className="card__poster" />
      <div className="card__body">
        <h2 className="card__title">{movie.title}</h2>
        <p className="card__meta">
          Uscita: {dataUscita} · Voto: {movie.vote_average.toFixed(1)}
        </p>
        <p className="card__overview">
          {movie.overview || "Trama non disponibile."}
        </p>
        <Link className="card__cta" to={`/movies/${movie.id}`}>
          Dettaglio
        </Link>
      </div>
    </article>
  );
}
