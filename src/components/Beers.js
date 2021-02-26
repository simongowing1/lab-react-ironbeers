import React from 'react';
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom';
import DetailedBeers from "./detailedBeers"

class Beers extends React.Component {
  render(){
      console.log(this.props.location)
let renderBeers = this.props.location.state.beers.map(beer => {
    return <DetailedBeers name={beer.name} img={beer.image_url}  />
    //initialize detailedBeer component with props
    //props are beer.name | beer.image_url
})
    return (
        <div>
            <h1>Hello, technically I'm a beer</h1>
            {renderBeers}
        </div>
      );
  }
    
}

export default Beers;