import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src='https://union-travel.ru/assets/images/country/thailand/resorts/beach1.jpg'></img>
      </div>
      <div className={s.descriptionBlock}>
        ava+descriprion
      </div>

    </div >
  )
}

export default ProfileInfo;