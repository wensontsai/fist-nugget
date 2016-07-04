import React, {Component} from 'react'
import { connect } from 'react-redux';

const flickrImages = [
  "https://farm2.staticflickr.com/1553/25266806624_fdd55cecbc.jpg",
  "https://farm2.staticflickr.com/1581/25283151224_50f8da511e.jpg",
  "https://farm2.staticflickr.com/1653/25265109363_f204ea7b54.jpg",
  "https://farm2.staticflickr.com/1571/25911417225_a74c8041b0.jpg",
  "https://farm2.staticflickr.com/1450/25888412766_44745cbca3.jpg"
];

class Gallery extends Component {

  constructor(props) {
    super(props);
    this.props.dispatch({type: 'TEST'});
    console.log(props);
  }


  render() {
    const {
      gallery,
      dispatch
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
            <div key={index} onClick={() => dispatch({type:'IMAGE_SELECTED', image})}>
              <img src={image}/>
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
