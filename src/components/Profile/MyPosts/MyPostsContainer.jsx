import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
   /*  updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text));
    }, */
    addPost: (newPostText) => {
      dispatch(addPostActionCreator(newPostText))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); //создание контейнерной компоненты с помощью функции connect позволяет локально подписываться, те там subscribe внутри локальный. И каждый раз когда у нас в state происходят изменения запускается функция mapStateToProps и формируется новый объект внутренности которого сравнивается со старыми
export default MyPostsContainer;