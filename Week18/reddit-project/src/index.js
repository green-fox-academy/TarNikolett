import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Conponents/Header/header';
import PostsContainer from './Conponents/Posts/posts'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <PostsContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
