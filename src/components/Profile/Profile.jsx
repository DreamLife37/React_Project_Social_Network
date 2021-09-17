import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';


const Profile = () => {
    return  <div>
       <div><img src='https://union-travel.ru/assets/images/country/thailand/resorts/beach1.jpg'></img>
    </div>
    <div>
      ava+descriprion
    </div>
    <MyPosts />
  </div>
}

export default Profile;