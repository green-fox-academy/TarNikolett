import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import db from '../../Firebase/db';

import './addPost.css';

export default function AddPost() {
  let [isClicked, setIsClicked] = useState(false);

  let [formValues, setFormValues] = useState({
    title: '',
    url: '',
  });

  function validateForm() {
    if (formValues.title.length === 0 || formValues.url.length === 0) {
      alert('A form kitöltése kötelező!')
    }
  }

  function IdGenerator() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }


  // hozzáadja az üres inputokat is 
  function submitAndRedirect(e) {
    e.preventDefault()
    let date = new Date().getTime();
    if (formValues.title.length >= 1 && formValues.url.length >= 1) {
      setIsClicked(true);
      alert('A posztot hozzáadtuk az adatbázishoz!')
      db.collection('posts')
        .add({
          id: IdGenerator(),
          owner: 'anonymus',
          score: 0,
          timestamp: date,
          title: formValues.title,
          url: formValues.url,
          vote: null
        })
    }

  }
  if (isClicked) { return <Redirect to="/" /> }


  function handleInputData(e) {
    let inputName = e.target.name;
    let titleInputData = e.target.value;

    setFormValues(prevValue => {
      if (inputName === 'title') {
        return ({
          title: titleInputData,
          url: prevValue.url,
        })
      }
      if (inputName === 'url') {
        return ({
          title: prevValue.title,
          url: titleInputData
        })
      }
    })
  }

  return (
    <form onSubmit={submitAndRedirect}>
      <div className="add-post-container">
        <label htmlFor="title">Title</label>
        <textarea type="text" id='title' name="title" onChange={handleInputData}></textarea>
        <label htmlFor="url">URL</label>
        <input type="text" id='url' name="url" onChange={handleInputData}></input>
      </div>
      <button className="add-post-submit-btn" onClick={validateForm}>Submit</button>
    </form>
  )
};