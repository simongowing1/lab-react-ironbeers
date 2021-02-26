import React from 'react';

export default function detailedBeers(props) {
    // console.log(props)
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.img} />
            <h2>{props.tagline}</h2>
            <h3>Created by: {props.contributedBy}</h3>
        </div>
    )
}
