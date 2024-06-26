import React from 'react'

const Pagination = ({MoveFront,MoveBack,pagenumber}) => {
  return (
    <div>
      <div className='bg-secondary  d-flex justify-content-center  p-3 m-2'>
        {/* PASSING MOVEBACK WORD FUNCTION TO GO BACK */}
        <div ><i onClick={MoveBack}  className="fa-solid fa-arrow-left " title='Move Back Word' ></i></div>   
        <div className='px-3 fw-bold'>{pagenumber}</div> 
        {/* WE ARE USING PROPS FOR MOVING FRONT WHERE PROPS IS DEFINED IN MOVIE.JSX */}
  <div> <i onClick={MoveFront} className="fa-solid fa-arrow-right " title='Move Forword'></i></div> 
      </div>
    </div>
  )
}

export default Pagination
