import React from 'react';
import PostItem from './PostItem';

const Posts = () => {
  return (
    <div>
      <button
        type='submit'
        className='bg-lime-300 hover:bg-lime-400 transition-all p-2 text-sm mb-2'  
      >
        Get posts
      </button>
      <PostItem />
    </div>
  )
}

export default Posts;