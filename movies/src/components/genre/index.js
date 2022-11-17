import { getGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Chip from "@mui/material/Chip";


const Genres = ({
  selectedGenres,
  setSelectedGenres,
  genres,
  setGenres,
  type,
  setPage,
}) => {

    const {  data } 
   = useQuery(['getGenres', type], ()=> getGenres(type))
   setGenres(data?.genres);
  
  
 
    
  const handleAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
      );
      setGenres([...genres, genre]);
      setPage(1);
    };
    

  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres?.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre?.name}
          key={genre?.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres?.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size="small"
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  );
};

export default Genres;