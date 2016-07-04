import React, {Component} from 'react'
import { connect } from 'react-redux';

import {bindActionCreators} from 'redux';

import  * as GalleryActions from '../../actions/gallery.js';

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.props.dispatch({type: 'TEST'});
    console.log(props);
  }


  render() {
    const {
      gallery,
      selectImage
    } = this.props;

    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div>
            <img src={this.props.gallery.selectedImage} />
          </div>
        </div>
        <div className="image-scroller">
          {this.props.gallery.images.map((image, index) => (
            <div key={index} onClick={() => selectImage(image)}>
            </div>
          ))}
        </div>
      </div>
    )
  }
};

function mapStateToProps(state) {
  return {
    gallery: state.gallery
  }
}

export default connect(mapStateToProps)(Gallery)
