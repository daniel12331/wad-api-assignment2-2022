import React, { useState} from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToFavoritesIcon from '../components/cardIcons/addToFavourites'
import { Pagination } from "@mui/material";
const HomePage = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const {  data, error, isLoading, isError }  = useQuery(['discover', currentPage], ()=> getMovies(currentPage))

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;
  const totalResults = data.total_results

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  }

  // Redundant, but necessary to avoid app crashing.
  const favorites = movies.filter(m => m.favorite)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  console.log(favorites)
  return (
    <div >
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