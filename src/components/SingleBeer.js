import React from 'react';


export default function SingleBeer (props) {
    const paramsId = props.match.params.id
    // console.log('Hey I am the ID', Id)
    const allBeers = props.location.state.beers;
    // console.log('Hello from detailedBeers', allBeers)
    const selectedBeer = allBeers.map((selectedBeer) => {
        // console.log(selectedBeer._id)
        if(selectedBeer._id === paramsId){
            return (
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
    });
    return(
        <div>
          {selectedBeer}
        </div>
    )
}
