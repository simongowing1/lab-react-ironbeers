import React, { Component } from 'react'
import axios from 'axios';

export default class NewBeer extends Component {

  state = {
    name: '',
    tagline: '',
    description: '',
    firstBrewed: '',
    brewersTips: '',
    attenuationLevel: '',
    contributedBy: '',
    error: null
  }

  handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
      this.setState({
        [name]: value
      })
   
  }

  handleSubmit = event => {
    event.preventDefault();
    // const {
    //   name,
    //   tagline,
    //   description,
    //   firstBrewed,
    //   brewersTips,
    //   attenuationLevel,
    //   contributedBy
    //   } = this.state;
    // console.log({ title, description });
    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', {
      name: this.state.name,
      tagline: this.state.tagline,
      description: this.state.description,
      firstBrewed: this.state.firstBrewed,
      brewersTips: this.state.brewersTips,
      attenuationLevel: this.state.attenuationLevel,
      contributedBy: this.state.contributedBy
    })
      .then((response) => {
        console.log(response)
        this.setState({
          name: '',
          tagline: '',
          description: '',
          firstBrewed: '',
          brewersTips: '',
          attenuationLevel: '',
          contributedBy: '',
        })
        // update the list of projects in Projects.js - we use the getData function 
        // in the props
        // this.props.getData();
      })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor="tagline">Tagline: </label>
        <input
          type="text"
          id="tagline"
          name="tagline"
          value={this.state.tagline}
          onChange={this.handleChange}
        />
         <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <label htmlFor="firstBrewed">First Brewed: </label>
        <input
          type="text"
          id="firstBrewed"
          name="firstBrewed"
          value={this.state.firstBrewed}
          onChange={this.handleChange}
        />
         <label htmlFor="brewersTips">Brewer's Tips: </label>
        <input
          type="text"
          id="brewersTips"
          name="brewersTips"
          value={this.state.brewersTips}
          onChange={this.handleChange}
        />
        <label htmlFor="attenuationLevel">Attenuation Level: </label>
        <input
          type="number"
          id="attenuationLevel"
          name="attenuationLevel"
          value={this.state.attenuationLevel}
          onChange={this.handleChange}
        />
        <label htmlFor="contributedBy">Contributed By: </label>
        <input
          type="text"
          id="contributedBy"
          name="contributedBy"
          value={this.state.contributedBy}
          onChange={this.handleChange}
        />
        <button type="submit">Create this project</button>
      </form>
    )
  }
}