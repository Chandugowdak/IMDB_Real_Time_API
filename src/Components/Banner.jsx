import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Banner = () => {
  return (
    <div
      className="d-flex align-items-end p-0"
      style={{
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUxDwGpsq5zmob6E112cz1NTODizm2rn41A&s)`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '50vh',
        width: '100%',
        backgroundColor: '#000', // Add background color to fill the space around the image
      }}
    >
      <div className="w-100 text-white text-center fw-bold bg-primary p-1">
        End-Game
      </div>
    </div>
  );
}

export default Banner;




