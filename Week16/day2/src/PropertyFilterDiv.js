import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';

const propertyDiv = data.filters['Property type'].map((item) =>
  <li key={item.name}>
    <input type="checkbox" id={item.name} checked={item.checked}></input>
    <label htmlFor={item.name}>{item.name}</label>
  </li>);
;
ReactDOM.render(propertyDiv, document.getElementById('property-type'));