import { useEffect, useState } from 'react';
import './posts.css';
import db from '../../Firebase/db';

function PostsContainer() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts')
      .get()
      .then((queryRef) => {
        queryRef.forEach((doc) => {
          const data = doc.data();
          posts.push({
            id: doc.id,
            owner: null,
            score: data.score,
            timestamp: data.timestamp,
            title: data.title,
            url: data.url,
            vote: data.vote
          })
        })
        setPosts(posts)
      });
  }, [posts.length])

  return (
    <div>
      {posts.map((post) => {
        return (
          <div>
            <h1>{post.title}</h1>
            <p>{post.url}</p>
          </div>
        );
      })}
    </div>
  );
}

export default PostsContainer;