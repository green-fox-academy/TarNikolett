import './posts.css';

function PostsContainer(props) {
  let posts = props.posts;

  return (
    <div className="posts">

      {posts.map((post) => {
        return (
          <div className="post-container" key={post.id}>
            <div className="vote-container">
              <button className="upvote"></button>
              <div className="score-div">{post.score}</div>
              <button className="downvote"></button>
            </div>
            <div className="specific-post-container" key={post.id}>
              <h1>{post.title}</h1>
              <a href="home">{post.url}</a>
              <div className="links-to-modify-delete">
                <p>Submitted</p>
                <a href="home">Modify</a>
                <a href="home">Remove</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostsContainer;