import React, {Component} from 'react'
import { connect } from 'react-redux';

import  { selectImage, loadImages } from '../../actions/gallery.js';

class Gallery extends Component {

  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div>
            <img src={this.props.gallery.selectedImage} />
          </div>
        </div>
        <div className="image-scroller">
          {this.props.gallery.images.map((image, index) => (
            <div key={index} onClick={() => this.props.selectImage(image)}>
              <img src={image}/>
            </div>
          ))}
        </div>
      </div>
    )
  }
};

// function mapStateToProps(state) {
//   return {
//     gallery: state.gallery
//   }
// }

// export default connect(mapStateToProps)(Gallery)

export default connect(
  (state) => ({ gallery: state.gallery }),
  { selectImage, loadImages }
)(Gallery);