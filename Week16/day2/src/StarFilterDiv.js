import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';

const starDiv = data.filters['Star rating'].map((item) =>
  <li key={item.name}>
    <input type="checkbox" id={item.name} checked={item.checked}></input>
    <label htmlFor={item.name}>{item.name}</label>
  </li>);
;

ReactDOM.render(starDiv, document.getElementById('star-rating'));