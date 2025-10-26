import Button from "@/components/commons/Button";
import Loading from "@/components/commons/Loading";
import MovieCard from "@/components/commons/MovieCard";
import { MovieProps } from "@/interfaces";
import { useCallback, useEffect, useState } from "react";

// Il componente inizia qui
const MoviesPage = () => {
  const [page, setPage] = useState<number>(1);
  const [year, setYear] = useState<number | null>(null);
  const [genre, setGenre] = useState<string>("All");
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMovies = useCallback(async () => {
  setLoading(true);

  // 1. CREA la scatola 'response' e mettici dentro il risultato di fetch
  const response = await fetch('/api/fetch-movies', { 
    method: 'POST',
    body: JSON.stringify({
      page,
      year, 
      genre: genre === "All" ? "" : genre
    }),
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  });

  // Ora che la scatola esiste, puoi usarla!
  const data = await response.json();

  setMovies(data.movies);
  setLoading(false);
}, [page, year, genre]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // Il return deve essere DENTRO la funzione MoviesPage
  return (
    <div className="min-h-screen bg-[#110F17] text-white px-4 md:px-10 lg:px-44">
      {/* ... Tutto il tuo JSX per i filtri e i titoli ... */}

      {/* Movies output */}
      <div className="grid grid-cols-2 ...">
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

      {/* ... Il resto del JSX ... */}
      {loading && <Loading />}
    </div>
  ); // Fine del return

}; // LA FUNZIONE MoviesPage FINISCE QUI

export default MoviesPage;