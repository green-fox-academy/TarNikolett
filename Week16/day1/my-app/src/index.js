import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FirstComponent from './first-component';
import SecondComponent from './second-component';
import reportWebVitals from './reportWebVitals';

let listOfItems = [
  {
    id: 1,
    title: "a"
  },
  {
    id: 2,
    title: "b"
  },
  {
    id: 3,
    title: "c"
  }];

ReactDOM.render(
  <React.StrictMode>
    <FirstComponent />
    <SecondComponent title="Ez egy title" items={listOfItems} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
