import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  
  return (
    <div>
      My Posts
      <div>
        <textarea></textarea>
        <button>Add</button>
      </div>
      <Post message='Hi, how are you' likesCount='5'/>
      <Post message="It's my first post" likesCount='10'/>
    </div>
  )

}

export default MyPosts;