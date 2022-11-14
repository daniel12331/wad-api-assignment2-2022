import React, { useState} from "react";
import { getTVShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { Pagination } from "@mui/material";

const TvShowsPage = (props) => {
    
  const [currentPage, setCurrentPage] = useState(1);
  const {  data, error, isLoading, isError }  
  = useQuery(['tvshow', currentPage], ()=> getTVShows(currentPage))

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvshows = data.results;
  const totalResults = data.total_pages

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  }

  return (
    <div >
    <PageTemplate
    title="Popular TV Shows"
    movies={tvshows}
    action={(movie) => {
     
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
export default TvShowsPage;