import { useEffect, useState } from 'react';

import Header from './Conponents/Header/header';
import PostsContainer from './Conponents/Posts/posts';
import db from '../src/Firebase/db';

export default function App() {
  const [posts, setPosts] = useState([]);
  let list = [];
  useEffect(() => {
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
      <PostsContainer posts={posts} />
    </div>
  )
}