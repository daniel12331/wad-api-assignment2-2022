import React, { useState} from "react";
import TextField from "@mui/material/TextField";
import { Button, Tab, Tabs } from "@mui/material";
import {Grid} from "@mui/material";
import { getSearch } from "../api/tmdb-api";
import { useQuery } from "react-query";
import {Pagination} from "@mui/material";
import PageTemplate from '../components/templateMovieListPage';


const SearchPage = () => {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [input, setInput] = useState(0);
  const [searchText, setSearchText] = useState("");

  const {  data }  = 
  useQuery(searchText && ['search',searchText,page,type], ()=> getSearch(searchText,page,type))

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
 }

 



  return (
    <> 
    {console.log(data?.results)}
   <Grid item>
    <TextField
    sx={{
        marginTop: 3,
        width:'96%'
      }}
    className="searchbox"
    label="Search"
    variant="filled"
    onChange={(e) => setInput(e.target.value)}
    ></TextField>
    <Button variant="contained" sx={{
      marginTop: 3,
      }}
      onClick={()=> setSearchText(input)}>
           Search   
        </Button>
        </Grid>

        <Tabs 
        value={type}
        className="searchbox"
        onChange={(event, newValue) =>{ setType(newValue);}
        } 
        >
        <Tab label="Search Movies" sx={{width:'50%'}} onClick={()=> setPage(1)}/>
        <Tab label="Search TV Shows"sx={{width:'50%'}} onClick={()=> setPage(1)}/>
        <Tab label="Search Actors"sx={{width:'50%'}} onClick={()=> setPage(1)}/>

        </Tabs>

        <PageTemplate
    title="Search Movies"
    movies={data?.results}
    actors={data?.results}
    type={type}
    action={(movie) => {
    }}
        />
      {searchText.length !== 0? 
      
        <Pagination count={data?.total_pages} 
            page={page}
            onChange={handleChangePage} 
            size="large" 
            color="secondary"
            sx={{
              display:'flex',
              justifyContent:'center'
            }}/>
          :
          ''
          }
    </>
          
);
};
export default SearchPage;