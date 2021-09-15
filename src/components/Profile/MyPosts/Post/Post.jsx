import React from 'react';
import s from './Post.module.css';


const Post = () => {
    return ( 
        <div className={s.item}>
          <img src='https://i.pinimg.com/originals/ba/66/02/ba6602a51ea3490764cb1e03ea28fae8.jpg'/>
          Post 1
          <div>
          <span>like</span>
          </div>
        
        </div>
    )    
}

export default Post;