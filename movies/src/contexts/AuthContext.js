import React, { useState, createContext } from "react";
import { login, signup, addFavouriteMovieAPI, removeFavouriteMovie } from "../api/movie-api";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");
  const [favorites, setFavorites] = useState( [] )


  const removeFromFavorites = async (username, movie) => {
    const result = await removeFavouriteMovie(username, movie);
    return (result.code == 200) ? true : false;
  };

  const addFavouriteMovie = async (username, movie) => {
    const result = await addFavouriteMovieAPI(username, movie);
    return (result.code == 200) ? true : false;
  }

  //Function to put JWT token in local storage.
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
    }
  };

  const register = async (username, password, favorites) => {
    const result = await signup(username, password, favorites);
    console.log(result.code);
    return (result.code == 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        userName,
        addFavouriteMovie,
        removeFromFavorites
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;