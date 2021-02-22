import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Title from './title-component';
import ShowFilters from './filter-component';
import data from './data';
import ShowHotels from './hotels-component';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Title />
    <div className="container">
      <ShowFilters filters={data.filters} />
      <ShowHotels hotels={data.hotels} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
