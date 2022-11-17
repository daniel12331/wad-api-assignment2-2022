import React, { useState} from "react";
import { getTVShows } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import { Pagination } from "@mui/material";
import Genres from "../components/genre";

const TvShowsPage = (props) => {
    
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
  = useQuery(['tvshow', currentPage, genreforURL], ()=> getTVShows(currentPage, genreforURL))

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
      <Genres
        type="tv"
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setGenres={setGenres}
        setPage={setCurrentPage}
        onClick={refetch}
      />
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