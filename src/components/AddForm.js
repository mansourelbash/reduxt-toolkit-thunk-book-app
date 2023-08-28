import React, { useEffect, useRef } from 'react';
import { insertBooks } from '../slice/bookSlice';
import { useSelector, useDispatch } from 'react-redux'
const Addform = () => {
  const title = useRef(null);
  const price = useRef(null);
  const description = useRef(null);
  const dispatch = useDispatch();
  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(insertBooks({
      id: Math.random().toString(36).slice(2),
      title: title.current.value,
      price: price.current.value,
      description: description.current.value
    }))
    title.current.value = ""
    price.current.value = ""
    description.current.value =""
  }

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input ref={title}  type='text' className='form-control' id='title' required />
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' ref={price} className='form-control' id='price' required />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              ref={description}
              required
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
