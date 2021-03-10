import { useEffect, useState } from 'react';
import './app.css';
import Header from './Conponents/Header/header';
import PostsContainer from './Conponents/Posts/posts';
import db from '../src/Firebase/db';
import Aside from '../src/Conponents/Aside/aside';

export default function App() {
  let [posts, setPosts] = useState([]);
  let [score, setScore] = useState(null);

  function handleUpvote() {
    setScore(score + 1)
  }
  function handleDownvote() {
    setScore(score - 1)
  }
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
    <div>
      <Header />
      <Aside />
      <PostsContainer posts={posts} handleDownvote={handleDownvote} handleUpvote={handleUpvote} />
    </div>
  )
}