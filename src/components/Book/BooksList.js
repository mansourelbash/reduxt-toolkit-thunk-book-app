import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
const BooksList = ({ data, error, loading, deleteBooks, dispatch, handleClick}) => {
  return (
    <div>
      <h2>Books List</h2>
      {loading ? (
        <div>Loading...</div>
      ) : data && data.length > 0 ? (
        <ul className='list-group'>
          {data.map((item) => (
            <li
              key={item.id}
              className='list-group-item d-flex justify-content-between align-items-center'
            >
              <div>{item.title}</div>
              <div className='btn-group' role='group'>
                <button type='button' className='btn btn-primary' onClick={()=>{handleClick(item)}}>
                  Read
                </button>
                <button type='button' className='btn btn-danger' onClick={() => dispatch(deleteBooks(item)).unwrap().then((data)=> console.log(data))}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className='text-center'>
          There are no book items. Please add items.
        </div>
      )}
    </div>
  );
};

export default BooksList;
