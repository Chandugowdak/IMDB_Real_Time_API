import React from 'react';

const Pagination = ({ MoveFront, MoveBack, pagenumber }) => {
  return (
    <div>
      <div className='bg-secondary d-flex justify-content-center p-3 m-2'>
        <div>
          <button onClick={MoveBack} className=" btn btn-info" title='Move Backward'>Move_back</button>
        </div>
        <div className='px-3 fw-bold'>{pagenumber}</div>
        <div>
          <button  onClick={MoveFront} className="btn btn-info" title='Move Forward'>Move_Front</button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
