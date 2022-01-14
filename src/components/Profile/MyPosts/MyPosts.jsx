import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import AddNewPostForm from './AddNewPostForm';

const MyPosts = (props) => {
  let postsElements = props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} />);

  const onAddPost = (values) => {
    props.addPost(values);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>

      <AddNewPostForm onAddPost={onAddPost} />

      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

export default MyPosts;