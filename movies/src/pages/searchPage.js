import React, { useState} from "react";
import TextField from "@mui/material/TextField";
import { Button, Tab, Tabs } from "@mui/material";

const SearchPage = () => {
  const [type, setType] = useState(0);

  return (
    <> 
    <div sx={{
        dispay:'flex'
    }}>  
    <TextField
    sx={{
        display:'flex',
        marginTop: 5
        
      }}
    className="searchbox"
    label="Search"
    variant="filled"
    //onChange={(e) => setSearchText(e.target.value)}
    ></TextField>

    <Button variant="contained" sx={{marginTop: 5}}>
           Search   
        </Button>
        </div> 
        <Tabs value={type}>
        <Tab label="Search Movies"/>
        <Tab label="Search TV Shows"/>

        </Tabs>

    </>
);
};
export default SearchPage;