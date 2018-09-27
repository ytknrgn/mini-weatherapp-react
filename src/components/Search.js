import React from 'react';

class Search extends React.Component {

  constructor() {
    super ();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {text: ''};
  }

  handleChange (event) {
    this.setState({text: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.receiveSearch(this.state.text);
  }

  render(){
    return (
      <div className="controls">
        <form className="search" id="search" onSubmit={this.handleSubmit}>
          <label className="search__label" htmlFor="search-tf">City</label>
          <input className="search__input" id="search-tf" name="city" placeholder="Enter city name" autoComplete="city" onChange={this.handleChange} />
          <button className="btn search__btn">Go</button>
        </form>
      </div>
    );
  }
}

export default Search;
