import { SidebarProps } from '../types';
import { Button } from './Button';

export function SideBar({ genresList, onSelectedGenreId, onSetSelectedGenreId }:SidebarProps) {
  function handleClickButton(id: number) {
    onSetSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genresList.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={onSelectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  );
}