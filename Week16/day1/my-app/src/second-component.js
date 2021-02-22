import React from 'react';

export default function SecondComponent(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <ul>
                {props.items.map((item) => <li key={item.id}>{item.title}</li>)}
            </ul>
        </>
    );
}