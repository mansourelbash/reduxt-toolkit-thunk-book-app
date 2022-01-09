import React from 'react';

const BooksList = ({ loading, posts, error }) => {
  const postList =
    !error || posts.length > 0
      ? posts.map((post) => (
          <li
            className='list-group-item d-flex  justify-content-between align-items-center'
            key={post.id}
          >
            <div>{post.title}</div>
            <div className='btn-group' role='group'>
              <button type='button' className='btn btn-primary'>
                Read
              </button>
              <button type='button' className='btn btn-danger'>
                Delete
              </button>
            </div>
          </li>
        ))
      : 'no posts returned';
  return (
    <div>
      <h2>Post List</h2>
      {loading ? 'loading...' : <ul className='list-group'>{postList}</ul>}
    </div>
  );
};

export default BooksList;
