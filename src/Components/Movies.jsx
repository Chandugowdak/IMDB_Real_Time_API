import React,{useEffect, useState} from 'react';
import Moviecard from './Moviecard';
import axios from   'axios';
import Pagination from './Pagination';
//I AM ACCESSING THE GLOBEL VAR IN HEAR ANRE RENDERING THAT TO MOVIECARD USING PROPS
const Movies = ({handlingmovie ,MoviRemover,watechlater}) => {
  const[Movie , setMovie] = useState([]);  //FOR MOVIE UPDATE
  const[pagenumber , setpagenumber] =useState(1); //FOR DYNAMIC PAGE NUMBER
  useEffect(()=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=b1edfc35cc0588e7843db093ef9c6953&language=en-US&page=${pagenumber}`).then(function(res){
      setMovie(res.data.results);

    })
  },[pagenumber])

 //METHODE FOR MOVING FRONT 
  const MoveFront = ()=>{   
    
    setpagenumber(pagenumber+1);
  }

  //METHODE FOR MOVING Back
  const MoveBack = ()=>{    
    if(pagenumber===1){
      setpagenumber(1); //EDGE CASE BECAUSE WE NEED NOT TO GO BACK THEN THIS
    } else{ 
    setpagenumber(pagenumber-1);
    }
  }


  return (
    
<div>
  <div className='text-center fw-bold p-2 m-2 fs-5 text-primary'>Trending Movies</div>
  <div className='card '>
    <div className='  row'>
      {Movie.map((MovieObject) => {
        return (
          <div  className='col-md-3 mb-3'>
            {/* WE ARE PASSING THE POPS TO THE MOVICARD FILE  KEY FOR MAINTAIN UNICKNESS [POST_PAT = LINK OF DYNAMIC PAGE] [HANDELMOVI = GLOBEL VAR FOR WATCH LATER ADD] [MOVIOBJECT = FOR THE ACCESS OF THE API] [MOVIEREMOVER FOR REMOVE ADDED MOVIE IN WATCH-LATER] [WATCHATER  = STATE FROM THE APP.JS*/}
            <Moviecard key={MovieObject.id} poster_path={MovieObject.poster_path} title = {MovieObject.title} handlingmovie={handlingmovie} MovieObject={MovieObject} MoviRemover={MoviRemover} watechlater={watechlater} />  
          
          
          </div>
        );
      })}
    </div>
    {/* PASSING  MOVEFRONT ,MOVEBACK PROPS  IT IS AN PAGINATION FILE*/}
    <Pagination MoveFront={MoveFront} MoveBack={MoveBack} pagenumber={pagenumber}  />  
  </div>
 
</div>

  );
}

export default Movies;


// API KEY = https://api.themoviedb.org/3/movie/popular?api_key=b1edfc35cc0588e7843db093ef9c6953&language=en-US&page=1