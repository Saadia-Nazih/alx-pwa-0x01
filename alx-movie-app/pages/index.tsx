import MovieCard from "@/components/commons/MovieCard";
import { MovieProps } from "@/interfaces";
import { useState, useEffect, useCallback } from "react";

const MoviesPage = () => { 

  const [movies, setMovies] = useState<MovieProps[]>([]);
  

  return (
    <div className="min-h-screen ...">
      
<div className="grid grid-cols-2 gap-4 ...">
  {movies?.map((movie: MovieProps) => (
    <MovieCard
      key={movie.id}
      id={movie.id}
     
      titleText={movie.titleText}
      primaryImage={movie.primaryImage}
      releaseYear={movie.releaseYear}
    />
  ))}
</div>
      
     
    </div>
  ); 
} 

export default MoviesPage;