import { useEffect, useState } from 'react';

import './app.css';
import db from '../src/Firebase/db';

import Header from './Conponents/Header/header';
import PostsContainer from './Conponents/Posts/posts';
import Aside from '../src/Conponents/Aside/aside';
import AddPost from '../src/Conponents/AddPost/addPost'
import Login from '../src/Conponents/Login/login';
import SignIn from '../src/Conponents/SignIn/SignIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default function App() {
  let [posts, setPosts] = useState([]);
  let [user, setUser] = useState(null);
  let [isClicked, setIsClicked] = useState(false);
  let [login, setLogin] = useState(false);

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
      { user && <SignIn user={user} />}
      <Router>
        <Switch>
          <Route path="/newPost">
            <AddPost user={user} />
          </Route>
          <Route path="/posts">
            <Aside isClicked={isClicked} setIsClicked={setIsClicked} />
            <PostsContainer posts={posts} user={user} />
          </Route>
          <Route path="/">
            <Login onLogin={setUser} user={user} login={login} setLogin={setLogin} />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}