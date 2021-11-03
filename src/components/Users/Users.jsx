import React from "react";
import styles from "./users.module.css"

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {id: 1, photoUrl: 'https://art-nto.ru/800/600/https/pbs.twimg.com/profile_images/416574591369498624/LkdCJGob.jpeg',followed: true, fullName: 'Andrey', status: 'Life is is Beautiful', location: {city: 'Ivanovo', country: 'Russia'} },
            {id: 2, photoUrl: 'https://art-nto.ru/800/600/https/pbs.twimg.com/profile_images/416574591369498624/LkdCJGob.jpeg',fullName: 'Andrey', status: 'Life is is Beautiful', location: {city: 'Ivanovo', country: 'Russia'} },
            {id: 3, photoUrl: 'https://art-nto.ru/800/600/https/pbs.twimg.com/profile_images/416574591369498624/LkdCJGob.jpeg',fullName: 'Andrey', status: 'Life is is Beautiful', location: {city: 'Ivanovo', country: 'Russia'} }
        ])
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
               <span>
                   <div>
                       <img src={u.photoUrl} className={styles.userPhoto} />
                   </div>
                   <div>
                       {u.followed 
                       ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                       : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                       
                   </div>
                </span> 
               <span>
                   <span>
                       <div>{u.fullName}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div>{u.location.country}</div>
                       <div>{u.location.city}</div>
                   </span>
               </span>
            </div>)
        }
    </div>
}

export default Users;