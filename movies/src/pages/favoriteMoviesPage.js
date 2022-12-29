import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { AuthContext } from "../contexts/AuthContext";
import { useQuery } from "react-query";
import { getFavouriteMovies } from "../api/movie-api";
import Spinner from '../components/spinner';
import RemoveFromFavorites from "../components/cardIcons/removeFromFavourites";
import WriteReview from "../components/cardIcons/writeReview";

const FavoriteMoviesPage = () => {
  const context = useContext(AuthContext);
  
  const {  data, error, isLoading, isError } 

  = useQuery(['getting fav movies'], ()=> getFavouriteMovies(context.userName))


 if (isLoading) {
   return <Spinner />
 }

 if (isError) {
   return <h1>{error.message}</h1>
 }  
 const movies = data;

  return (
    <PageTemplate
      title="Favorite Movies"
      movies={movies}
      action={(movie) => {
        return (
          <>
            <RemoveFromFavorites movie={movie} />
            <WriteReview movie={movie} />
          </>
        );
      }}
    />
  );
};

export default FavoriteMoviesPage;