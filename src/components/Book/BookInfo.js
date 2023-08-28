import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const BookInfo = () => {
  const book = useSelector((state)=>state.book.selectedBooks)
  console.log(book)
  return (
    <Fragment>
      <h2>Book Details</h2>
      {book.length > 0 ? (      <div>
        <p className='fw-bold'>Title:{book.length > 0 && book[0].title}</p>
        <p className='fw-light'>Description: {book.length > 0 && book[0].description}</p>
        <p className='fst-italic'>Price: {book.length > 0 && book[0].price}</p>
      </div>): (      <div className='alert alert-secondary' role='alert'>
        There is no post selected yet. Please select!
      </div>) }


    </Fragment>
  );
};

export default BookInfo;
