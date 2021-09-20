import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  let postsData = [
    {id: 1, post: 'Hi, how are you', likesCount: 5},
    {id: 2, post: 'Dimych', likesCount: 10},
    {id: 3, post: "It's my first post", likesCount: 15}
]
  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>

      <div className={s.posts}>
        <Post message={postsData[0].post} likesCount={postsData[0].likesCount} />
        <Post message={postsData[1].post} likesCount={postsData[1].likesCount} />
        <Post message={postsData[2].post} likesCount={postsData[2].likesCount} />
      </div>
    </div>
  )

}

export default MyPosts;