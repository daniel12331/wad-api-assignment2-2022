export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};


  //////////////////////////////////          Movies      /////////////////////////////////////////////////////////////



export const getDiscoverMovies = () => {
    return fetch(
       '/api/movies/discover', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  };    

  export const getUpComingMovies = () => {
    return fetch(
       '/api/movies/upcoming', {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  };    

  export const getMovie = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
       `/api/movies/${id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  };    


 
//////////////////////////////////          Genres      /////////////////////////////////////////////////////////////


   export const getGenres = async (type) => {
    return fetch(
        `/api/genres/${type}`, {
             headers: {
                 'Authorization': window.localStorage.getItem('token')
             }
         }
     ).then(res => { 
         return res.json();
     }).catch((error) => {
         console.log(error);
     });
   };    


//////////////////////////////////          Actors      /////////////////////////////////////////////////////////////


   export const getActors = async (pageNumber) => {
    return fetch(
        `/api/actor/page/${pageNumber}`, {
             headers: {
                 'Authorization': window.localStorage.getItem('token')
             }
         }
     ).then(res => { 
         return res.json();
     }).catch((error) => {
         console.log(error);
     });
   };   

   export const getActor = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
       `/api/actor/${id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  }; 
  

  export const getActorCredits = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
       `/api/actor/credits/${id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  }; 



  //////////////////////////////////          TvShows      /////////////////////////////////////////////////////////////


  export const getTVShows = async (pageNumber) => {
    return fetch(
        `/api/tvshow/page/${pageNumber}`, {
             headers: {
                 'Authorization': window.localStorage.getItem('token')
             }
         }
     ).then(res => { 
         return res.json();
     }).catch((error) => {
         console.log(error);
     });
   };  

   export const getTVShow = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
       `/api/tvshow/${id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  }; 

  export const getTvShowSimilar = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
       `/api/tvshow/similar/${id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  }; 


    //////////////////////////////////          Search      /////////////////////////////////////////////////////////////



  export const getSearch = (searchText, page, type ) => {


    return fetch(
       `/api/search/${searchText}/${page}/${type}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  }; 
  export const getMovieReviews = (args) => {
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
       `/api/actor/${id}`, {
            headers: {
                'Authorization': window.localStorage.getItem('token')
            }
        }
    ).then(res => {
        return res.json();
    }).catch((error) => {
        console.log(error);
    });
  }; 
