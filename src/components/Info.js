import React from 'react';

class Info extends React.Component {

  componentDidMount() {
    // const city = this.state.city;
    // this.fetchData(city);
    // this.props.currentImage
  }

  render(){
    return (
      <div className="info">
        <p className="info__item info__item--conditions" id="conditions">{this.props.condition}</p>
        <p className="info__item info__item--credits">
          <a href={this.props.currentImage.user.links.html} id="credit-user">{this.props.currentImage.user.name}</a>
          <span>on</span>
          <a href="#" id="credit-platform">Unsplash</a>
        </p>
      </div>
    );
  }
}

export default Info;
