import { useEffect, useState } from 'react';

import './app.css';
import db from '../src/Firebase/db';

import Header from './Conponents/Header/header';
import PostsContainer from './Conponents/Posts/posts';
import Aside from '../src/Conponents/Aside/aside';
import AddPost from '../src/Conponents/AddPost/addPost'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  let [posts, setPosts] = useState([]);

  useEffect(() => {
    let list = [];
    db.collection('posts')
      .get()
      .then((queryRef) => {
        queryRef.forEach((doc) => {
          const data = doc.data();
          list.push({
            id: doc.id,
            owner: null,
            score: data.score,
            timestamp: data.timestamp,
            title: data.title,
            url: data.url,
            vote: data.vote
          })
        })
        setPosts(list)
      });
  }, [posts.length])

  return (
    <main>
      <Header />
      <Router>
        <Switch>
          <Route path="/newPost">
            <AddPost />
          </Route>
          <Route path="">
            <Aside />
            <PostsContainer posts={posts} />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}