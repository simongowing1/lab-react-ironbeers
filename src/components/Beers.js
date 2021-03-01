import React from 'react';
import DetailedBeers from "./detailedBeers"
import { Link } from 'react-router-dom';

class Beers extends React.Component {

    state = {
        beers: this.props.location.state.beers,
        query: ''
    }

    handleChange = event => {
        console.log(event.target.value)
        let searchQuery = event.target.value.toLowerCase;
      
        this.setState(() => ({
          query: searchQuery,
        }))
      }

  render(){

    const searchResults = this.props.location.state.beers.filter((beer) => {
        return beer.name.toLowerCase().includes(this.state.query)  
          })

let renderBeers = searchResults.map(beer => {
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
            <form >
                <label htmlFor="query">Search: </label>
                <input
                type="text"
                id="query"
                name="query"
                value={this.state.query}
                onChange={this.handleChange}
                />
            </form>
            {renderBeers}
        </div>
      );
  }
    
}

export default Beers;