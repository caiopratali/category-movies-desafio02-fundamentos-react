import { Dispatch } from "react";

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface ContentProps {
  onSelectedGenre: GenreResponseProps;
  moviesList: MovieProps[];
}

export interface SidebarProps {
  genresList: GenreResponseProps[];
  onSelectedGenreId: number;
  onSetSelectedGenreId: Dispatch<number>;
}