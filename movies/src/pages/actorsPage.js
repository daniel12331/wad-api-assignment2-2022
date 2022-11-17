import React, {useState} from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getActors } from "../api/tmdb-api";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { Pagination } from "@mui/material";


const ActorsPage = (props) => {

  const [currentPage, setCurrentPage] = useState(1);
  const { data, error, isLoading, isError }  = useQuery(['actors', currentPage], ()=> getActors(currentPage))

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const actors = data.results;
  const totalResults = data.total_pages

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  }

  return (
    <div> 
    <PageTemplate
      title="Most Popular Actors"
      actors={actors}
    />

  <Pagination
  count={totalResults} 
  page={currentPage}
  onChange={handleChangePage} 
  size="large" 
  color="secondary"
  sx={{
    display:'flex',
    justifyContent:'center'
  }}/>
   
  </div>
)};
export default ActorsPage;