import React from 'react';


export default function RandomBeer (props) {
  const randomIndex = Math.floor(Math.random()*props.location.state.beers.length)
   const selectedBeer = props.location.state.beers[randomIndex];
   console.log(selectedBeer);
    return(
        <div key={selectedBeer._id}>
          <img src={selectedBeer.image_url} alt={selectedBeer.name}></img>
          <h1>{selectedBeer.name}</h1>
          <h2>{selectedBeer.tagline}</h2>
          <p>{selectedBeer.first_brewed}</p>
          <p>{selectedBeer.attenuation_level}</p>
          <p>{selectedBeer.description}</p>
          <p>{selectedBeer.contributed_by}</p>                    
        </div>
    )
}