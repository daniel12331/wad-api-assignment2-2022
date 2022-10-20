import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getUpComignMovies } from "../api/tmdb-api";


const UpComingMoviePage = (props) => {
  const [movies, setMovies] = useState([]);
 
  useEffect(() => {
    getUpComignMovies().then(movies => {
      setMovies(movies);
    });
  }, []);

  return (
    <PageTemplate
      title='Up Coming Movies'
      movies={movies}
    />

  );
};
export default UpComingMoviePage;