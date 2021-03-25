import { ContentProps } from '../types';
import { MovieCard } from './MovieCard';

export function Content({ onSelectedGenre, moviesList }:ContentProps) {
  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {onSelectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {moviesList.map(movie => (
            <MovieCard key={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );
}