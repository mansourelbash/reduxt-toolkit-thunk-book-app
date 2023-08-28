import React, { Fragment, useEffect, useState } from 'react';
import BookInfo from './BookInfo';
import BooksList from './BooksList';
import { getBooks, deleteBooks, selectedBook} from '../../slice/bookSlice';
import { useSelector, useDispatch } from 'react-redux'
import './book.css';

const PostContainer = () => {
  const books = useSelector((state)=> state.book.books)
  const error = useSelector((state)=> state.book.error)
  const loading = useSelector((state)=> state.book.loading)
  const [book,setBook] = useState(null)
  const dispatch = useDispatch()
  useEffect( () =>{
    dispatch(getBooks())
  },[dispatch])

  const handleClick = (e) =>{
    dispatch(selectedBook(e));
  }
  return (
    <Fragment>
      <hr className='my-5' />
      <div className='row'>
        <div className='col'>
          <BooksList data={books} loading={loading} error={error} deleteBooks={deleteBooks} dispatch={dispatch} dispatch={dispatch} handleClick={handleClick}/>
        </div>
        <div className='col side-line'>
          <BookInfo book={book} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
