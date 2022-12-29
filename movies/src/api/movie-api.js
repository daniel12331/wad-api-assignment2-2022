export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password, favorites) => {
    return fetch('/api/users?action=register', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password, favourites : favorites})
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

    //////////////////////////////////          Movies Reviews     /////////////////////////////////////////////////////////////

  export const getMovieReviews = (id) => {
 
    return fetch(
       `/api/addreview/${id}/reviews`, {
        headers: {
            'Authorization': window.localStorage.getItem('token'),
            'Content-Type': 'application/json'
        },
        method: 'get'}).then(res => res.json())
  };

  export const addMovieReview = (name, movie, review) => {

    return fetch(`/api/addreview/${name}/reviews/${movie.id}?action=addreview`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ movieid : movie.id, author : review.author, review : review.review, rating: review.rating  })
    }).then(res => res.json())
};

    //////////////////////////////////          Movies Favourites     /////////////////////////////////////////////////////////////

    export const addFavouriteMovieAPI = (username , movie) => {

        return fetch(`/api/users/add/${username}/favourites`, {
            headers: {
                'Authorization': window.localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify({  movie })
        }).then(res => res.json())
    };

    export const getFavouriteMovies = (username) => {
 
        return fetch(
           `/api/users/${username}/favourites`, {
            headers: {
                'Authorization': window.localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            method: 'get'}).then(res => res.json())
      };

      export const removeFavouriteMovie = (username, movie) => {
        return fetch(`/api/users/${username}/delete/favourites`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'delete',
            body: JSON.stringify({ movie })
        }).then(res => res.json())
    };