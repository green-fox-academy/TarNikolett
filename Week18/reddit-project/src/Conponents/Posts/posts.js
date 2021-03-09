import './posts.css';
import Vote from './Vote/vote';

function PostsContainer(props) {
  let posts = props.posts;
  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="post-container">
            <Vote score={props.score} />
            <div className="specific-post-container">
              <h1>{post.title}</h1>
              <a href="">{post.url}</a>
              <div className="links-to-modify-delete">
                <p>Submitted</p>
                <a href="">Modify</a>
                <a href="">Remove</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostsContainer;