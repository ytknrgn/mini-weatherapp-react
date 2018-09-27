import React from 'react';
import Thumb from './Thumb';

class Thumbs extends React.Component {

  render(){
    return (

      <div className="thumbs" id="thumbs">
        {this.props.imagesArray.map(image => <Thumb key={image.id} img={image} setCurrentImage={this.props.setCurrentImage}/>)}
      </div>

    );
  }
}

export default Thumbs;
