import React from 'react';

export default function ShowHotels(props) {
    return (
        <>
            <div className="hotels-container">
                {
                    props.hotels.map((hotel) =>
                        <div className="specific-hotel-container">
                            <h4>{hotel.name}</h4>
                            <div className="img-container">
                                <img src={hotel.imageURL}></img>
                            </div>
                            <div className="description-button-container">
                                <p>{hotel.description}</p>
                                <button>Book Now!</button>
                            </div>
                        </div>)}
            </div>
        </>

    )
};