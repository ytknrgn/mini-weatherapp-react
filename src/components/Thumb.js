import React from 'react';

class Thumb extends React.Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (event) {
    this.props.setCurrentImage(this.props.img);
  }

  render(){
    return (
      <img className='thumb' src={this.props.img.urls.thumb} onClick={this.handleClick}></img>
    );
  }
}

export default Thumb;
