import './addPost.css';

export default function AddPost() {

  return (
    <>
      <div className="add-post-container">
        <label htmlFor="title">Title</label>
        <textarea type="text" id='title'></textarea>
        <label htmlFor="url">URL</label>
        <input type="text" id='url'></input>
      </div>
      <button className="add-post-submit-btn">Submit</button>
    </>
  )
};