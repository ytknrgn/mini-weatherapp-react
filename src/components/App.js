import React from 'react';
import Thumbs from './Thumbs';
import Thumb from './Thumb';
import Info from './Info';
import Search from './Search';

class App extends React.Component {
  constructor() {
    super();

    this.state = {  city: 'london', 
                    condition: '',
                    currentImage: {},
                    imagesArray: []};
    this.receiveSearch = this.receiveSearch.bind(this);
  }

  fetchData () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${this.state.city}&APPID=73a0db73557b252a663d1be585b65045`)
    .then(response => response.json())
    .then(body => {
      this.setState({condition: body.weather[0].description}, () => {
        fetch(`https://api.unsplash.com/search/photos?query=${this.state.condition}&client_id=ad9982e29de08ede9a9626876b58459ede10d6946a4a7dd0f66e6cd8da0b4bb4`)
        .then(response => response.json())
        .then(body => {
          this.setState({
            imagesArray: body.results,
            currentImage: body.results[0]
          }, () => console.log(this.state))
        })
        }
      )}
    );
  }

  componentDidMount() {
    this.fetchData ();
  }

  receiveSearch(search) {
    this.setState({city: search}, () => this.fetchData ());
  }

  render() {
    return (
      <main className="content">
        <header className="header">
          <h1 className="title">
            <i>Meteor</i>
            <i>opolis</i>
          </h1>
        </header>

        <figure className="photo" id="photo"></figure>

        <Info />
        <Thumbs />
        <Search receiveSearch={this.receiveSearch}/>
      </main>
    );
  }
}

export default App;
