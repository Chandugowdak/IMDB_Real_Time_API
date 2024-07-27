import React, { useState } from 'react';

const Watch = ({ watechlater, setwatchlater, MoviRemover }) => {
  // FOR IMAGE URL
  const baseURL = 'https://image.tmdb.org/t/p/original';
  // FOR THE SEARCH BAR
  const [search, setsearch] = useState('');

  // FUNCTION FOR SEARCH BAR
  let handelsearch = (e) => {
    setsearch(e.target.value);
  };

  // FUNCTION FOR UPPER ARROW - SORT IN ASCENDING ORDER
  let upperarrow = () => {
    let upperlist = [...watechlater].sort((movieA, movieB) => movieA.vote_average - movieB.vote_average);
    // UPDATING THE PROPS CAME FROM THE APP.JS FOR INCREASE SORT
    setwatchlater(upperlist);
  };

  // FUNCTION FOR LOWER ARROW - SORT IN DESCENDING ORDER
  let decresearrow = () => {
    let decreselist = [...watechlater].sort((movieA, movieB) => movieB.vote_average - movieA.vote_average);
    // UPDATE THE DECREASE FUNCTION
    setwatchlater(decreselist);
  };

  return (
    <>
      {/* TOP THREE BUTTON */}
      <div className='d-flex justify-content-center p-3 m-2 gap-3'>
        <div className='btn btn-primary fs-5'>All Movies</div>
      </div>

      {/* CODE FOR TEXT INPUT */}
      <div className='d-flex justify-content-center p-2'>
        <input
          style={{ height: "50px" }}
          onChange={handelsearch}
          value={search}
          className='w-75 w-md-50 w-lg-25 border border-white rounded-1 bg-secondary-subtle p-2 m-1'
          type='text'
          placeholder='Search For Movies'
        />
      </div>

      {/* TABLE FOR THE MOVIE LIST */}
      <div className='border border-3 rounded m-3 p-3'>
        <div className='table-responsive'>
          <table className='table text-gray text-center'>
            {/* TABLE HEADING */}
            <thead className='border fs-6 p-3 m-2 text-secondary-emphasis'>
              <tr>
                <th>Name</th>
                <th className='d-flex gap-2 justify-content-center'>
                  <div onClick={upperarrow} style={{ cursor: 'pointer' }}>
                    <i className="fa-solid fa-arrow-up"></i>
                  </div>
                  <div>Rating</div>
                  <div onClick={decresearrow} style={{ cursor: 'pointer' }}>
                    <i className="fa-solid fa-arrow-down"></i>
                  </div>
                </th>
                <th>Popularity</th>
                <th>Actions</th>
              </tr>
            </thead>
            {/* TABLE DATA PURPOSE */}
            <tbody>
              {/* THIS FILTER IS FOR THE SEARCH BAR TO FIND PARTICULAR FILM NAME */}
              {watechlater.filter((data) => {
                // THIS SAYS IF THE SEARCH IS EQUAL RETURN BUT FIRST WE CONVERT THE TITLE INTO LOWERCASE AND THEN COMPARE
                return data.title.toLowerCase().includes(search.toLowerCase());
              }).map((data) => (
                // ACCESSING THE PROPS FROM THE APP.JS AND ACCESSING THE DATA THAT ARE REQUIRED BY USING [DATA] AS AN ARGUMENT
                <tr key={data.id} className='border rounded'>
                  {/* IMAGE */}
                  <td>
                    <img
                      className='p-1 m-1 border rounded img-fluid'
                      src={`${baseURL}${data.backdrop_path}`}
                      alt='Movie images'
                      width='150px'
                      height='100px'
                    />
                    {/* TITLE FOR POSTER */}
                    <div className='fw-bold p-1 m-1 w-100 fs-md-1 fs-sm-4'>{data.original_title}</div>
                  </td>
                  {/* RATING */}
                  <td className='text-center text-primary fw-bold'>{data.vote_average}</td>
                  {/* POPULARITY */}
                  <td className='text-center text-primary fw-bold'>{data.popularity}</td>
                  {/* TO DELETE THE ADDED MOVIES */}
                  <td>
                    <button className='btn btn-danger fw-bold fs-5' onClick={() => MoviRemover(data)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Watch;
