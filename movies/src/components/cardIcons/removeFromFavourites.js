import React, { useContext } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { AuthContext } from "../../contexts/AuthContext";

const RemoveFromFavoritesIcon = ({ movie }) => {
  const context = useContext(AuthContext);

  const handleRemoveFromFavorites = (e) => {
    e.preventDefault();
    console.log(movie)
    context.removeFromFavorites(context.userName, movie);
  };
  return (
    <IconButton
      aria-label="remove from favorites"
      onClick={handleRemoveFromFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromFavoritesIcon;