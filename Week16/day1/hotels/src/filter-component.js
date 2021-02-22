import React from 'react';


export default function ShowFilters(data) {
  return (
    <>
      <div className="filters-container">
        <div className="star-rating-container">
          <h4>Star rating</h4>
          {data.filters['Star rating'].map((filter) =>
            <li key={filter.name}>
              <input type="checkbox" id={filter.name} checked={filter.checked}></input>
              <label htmlFor={filter.name}>{filter.name}</label>
            </li>)}
        </div>
        <div className="property-type-container">
          <h4>Property type</h4>
          {data.filters['Property type'].map((filter) =>
            <li key={filter.name}>
              <input type="checkbox" id={filter.name} checked={filter.checked}></input>
              <label htmlFor={filter.name}>{filter.name}</label>
            </li>)}
        </div>
      </div>
    </>
  )
}