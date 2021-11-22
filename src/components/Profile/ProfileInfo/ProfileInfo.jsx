import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {

  if (!props.profile) {
    return <Preloader />
  }
  debugger
  return (
    <div>
      <div>
        <img src='https://union-travel.ru/assets/images/country/thailand/resorts/beach1.jpg'></img>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />

        <div>My name: {props.profile.fullName}</div>
        <div>About me: {props.profile.aboutMe}</div>
        <div>VK profile: {props.profile.contacts.vk}</div>
        
      </div>

    </div >
  )
}

export default ProfileInfo;