import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Home extends React.Component {
    state = {
        beers: []
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                // console.log(response.data);
                this.setState({
                    beers: response.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }
  
    render(){
    return (
        <div>
        <ul>
            <li><Link to={{
                pathname:'/beers',
                state: {
                    beers: this.state.beers
                }
            }}>All Beers</Link></li>
            <li><Link to={`/new-beer`}>New Beer</Link></li>
            <li><Link to={{
                pathname:'/random-beer',
                state: {
                    beers: this.state.beers
                }
            }}>Random Beer</Link></li>
        </ul>
        </div>
      );
  }
    
}

export default Home;