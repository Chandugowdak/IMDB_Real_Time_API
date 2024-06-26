import React from 'react';
import icon from './Icon.jpg';
import {Link} from 'react-router-dom';
const Nav = () => {
  return (
    <div className='display-flex text-left  justify-content-center border border-3  rounded p-2 m-1 ' >

      {/* STYLING FOR THE IMAGE  */}
    <img src={icon} alt="Filam_Icons"  width="40px" hight="30px"  /> 
    {/* STYLING FOR THE MOVING TAGES  */}
     <Link to='/Movie' className='text-blue p-5 fw-bold text-decoration-none fs-4 ' title='Movies'>Movies</Link>
     <Link to='/Watch'className='text-blue p-5 fw-bold text-decoration-none fs-4' title='Watch-Later'>Watch-List</Link>

     {/*  <a href="google.com" className='text-blue p-5 fw-bold text-decoration-none fs-4'>Movies</a>
      <a href="google.com" className='text-blue p-5 fw-bold text-decoration-none fs-4'>Watch-List</a> */}
    </div>
  );
}

export default Nav;
