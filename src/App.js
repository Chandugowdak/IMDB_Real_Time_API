import React, { useEffect, useState } from 'react';
import Nav from './Components/Nav';
import { Routes, Route } from 'react-router-dom';
import Movies from './Components/Movies';
import Watch from './Components/Watch';
import Banner from './Components/Banner';

const App = () => {
  // INITIALIZE THE WATCHLATER STATE AS AN EMPTY ARRAY
  let [watechlater, setwatchlater] = useState([]);

  // FUNCTION FOR ADDING MOVIES
  let handlingmovie = (movieobj) => {
    // CREATE A NEW VAR, BECAUSE WE ADD NEW MOVIE IT HAS TO ADD BOTH PREVIOUS MOVIES AND NEW MOVIES
    let newmovies = [...watechlater, movieobj];
    // THIS IS TO ADD TO LOCAL STORAGE. THE DATA IS UPDATED AND WE HAVE TO CONVERT IT TO JSON
    localStorage.setItem('MovieApp', JSON.stringify(newmovies));
    // UPDATE THE WATCHLATER STATE
    setwatchlater(newmovies);
    // LOG NEWMOVIES INSTEAD OF WATECHLATER
    console.log(newmovies);
  }

  // REMOVE THE ADDED MOVIE FROM WATCH LIST
  let MoviRemover = (movieobj) => {
    // ASSUMING WATECHLATER IS AN ARRAY OF MOVIE OBJECTS
    const newMovies = watechlater.filter((movie) => {
      return movie.id !== movieobj.id;
    });
    // UPDATE THE WATCHLATER STATE
    setwatchlater(newMovies);
    // UPDATE THE LOCAL STORAGE
    localStorage.setItem('MovieApp', JSON.stringify(newMovies));
    // LOG THE NEWMOVIES ARRAY TO SEE IF THE MOVIE IS REMOVED
    console.log(newMovies);
  };

  // USE EFFECT TO KEEP THE APP UPDATED AND EVEN AFTER REFRESHING WE USE GETITEMS
  useEffect(() => {
    let Newgetmovies = localStorage.getItem('MovieApp');
    // IF NO DATA IN LOCAL STORAGE SIMPLY RETURN
    if (Newgetmovies === null || Newgetmovies === undefined) {
      return;
    }
    // IF DATA PRESENT, UPDATE THE USE STATE
    try {
      setwatchlater(JSON.parse(Newgetmovies));
    } catch (e) {
      console.error('Failed to parse movies from localStorage:', e);
    }
  }, []);

  return (
    <div>
      <Nav />
      <Routes>
        {/* PASSING MULTIPLE COMPONENTS */}
        <Route path='/Movie' element={<>
          <Banner />
          <Movies watechlater={watechlater} handlingmovie={handlingmovie} MoviRemover={MoviRemover} />
        </>} />
        {/* PASSING setwatchlater FOR WATCH.JS */}
        <Route path='/Watch' element={<Watch watechlater={watechlater} setwatchlater={setwatchlater} MoviRemover={MoviRemover} />} />
      </Routes>
    </div>
  );
}

export default App;
