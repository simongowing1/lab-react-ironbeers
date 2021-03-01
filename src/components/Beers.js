import React from 'react';
import DetailedBeers from "./detailedBeers"
import { Link } from 'react-router-dom';

class Beers extends React.Component {

    state = {
        beers: this.props.location.state.beers
    }

  render(){
let renderBeers = this.props.location.state.beers.map(beer => {
    return (
        <div key={beer._id}>
    <DetailedBeers name={beer.name} img={beer.image_url} tagline={beer.tagline} contributedBy={beer.contributed_by} id={beer._id} key={beer._id}/>
    <Link to={{
                pathname:`/beers/${beer._id}`,
                state: {
                    beers: this.state.beers
                }
            }}>Find more info</Link>
    </div>
    )
})

    return (
        <div >
            <h1>All beers</h1>
            {renderBeers}
        </div>
      );
  }
    
}

export default Beers;