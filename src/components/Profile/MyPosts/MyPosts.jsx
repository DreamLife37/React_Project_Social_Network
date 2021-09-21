import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
  let posts = [
    { id: 1, post: 'Hi, how are you', likesCount: 5 },
    { id: 2, post: 'Dimych', likesCount: 10 },
    { id: 3, post: "It's my first post", likesCount: 15 }
  ]

  let postsElements =
    posts.map(p => <Post message={p.post} likesCount={p.likesCount} />);

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add post</button></div>
      </div>

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )

}

export default MyPosts;