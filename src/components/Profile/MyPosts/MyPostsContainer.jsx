import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(updateNewPostActionCreator(text));
    },
    addPost: () => {
      dispatch(addPostActionCreator())
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts); //создание контейнерной компоненты с помощью функции connect позволяет локально подписываться, те там subscribe внутри локальный. И каждый раз когда у нас в state происходят изменения запускается функция mapStateToProps и формируется новый объект внутренности которого сравнивается со старыми
export default MyPostsContainer;