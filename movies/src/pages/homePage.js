import React, { useState} from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavourites'
import { Pagination } from "@mui/material";
import Genres from "../components/genre";

const HomePage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  
  const useGenre = (selectedGenres) => {
    if (selectedGenres.length < 1) return "";
  
    const GenreIds = selectedGenres?.map((g) => g.id);
    return GenreIds.reduce((acc, curr) => acc + "," + curr);
  };

  const genreforURL = useGenre(selectedGenres);


  const {  data, error, isLoading, isError, refetch } 
   = useQuery(['discover', currentPage, genreforURL], ()=> getMovies(currentPage, genreforURL))

  

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const totalResults = data.total_pages

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  }

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  console.log(favorites)
  return (
    <div >
      
      <Genres
        type="movie"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setCurrentPage}
        onClick={refetch}
      />
    <PageTemplate
    title="Discover Movies"
    movies={movies}
    action={(movie) => {
      return <AddToFavoritesIcon movie={movie} />
    }}
        />
<Pagination count={totalResults} 
  page={currentPage}
  onChange={handleChangePage} 
  size="large" 
  color="secondary"
  sx={{
    display:'flex',
    justifyContent:'center'
  }}/>
 
       </div>
    );
};
export default HomePage;