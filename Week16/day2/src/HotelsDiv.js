import React from 'react';
import ReactDOM from 'react-dom';
import data from './data';

const hotelsDiv = data.hotels.map((hotel) =>
  <div className="specific-hotel-container">
    <h4>{hotel.name}</h4>
    <div className="img-container">
      <img src={hotel.imageURL}></img>
    </div>
    <div className="description-button-container">
      <p>{hotel.description}</p>
      <button>Book Now!</button>
    </div>
  </div>)
  ;

ReactDOM.render(hotelsDiv, document.getElementById('hotels-container'));