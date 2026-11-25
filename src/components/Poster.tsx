import type { PosterProps } from "../types/movie";

// componente riusabile per mostrare la locandina o il segnaposto wireframe
export function Poster({ posterPath, title, className = "card__poster" }: PosterProps) {
  if (!posterPath) {
    return <div className={className}>Poster</div>;
  }

  return (
    <div className={className}>
      <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt={title} />
    </div>
  );
}
