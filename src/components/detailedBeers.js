import React from 'react';

export default function detailedBeers(props) {
    // console.log(props)
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} />
        </div>
    )
}
