import React from 'react';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  debugger
  let postsElements =
    props.posts.map(p => <Post message={p.post} likesCount={p.likesCount} />);
    
  let newPostElement = React.createRef();
    
  let addPost = () => {
    //props.addPost(); 
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
     //props.updateNewPostText(text);
     props.dispatch(updateNewPostActionCreator(text));
  }

  return (
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div><textarea onChange={onPostChange} ref={newPostElement} // при любой именении вызывается функция onPostChange
        value={props.newPostText}/></div>
        <div>
          <button onClick={addPost}>Add post</button></div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}
export default MyPosts;