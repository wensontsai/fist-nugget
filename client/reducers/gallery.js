const defaultState = {
  images: [],
  selectedImage: ''
}

export default function images(state = defaultState, action) {
  switch(action.type) {
    case 'TEST':
      return state;
    case 'IMAGE_SELECTED':
      return {...state, selectedImage: action.image};
    case 'IMAGES_LOADED':
      return {...state, images: action.images};
    // case 'IMAGE_LOAD_FAILURE':
    //   return {...state, images: action.error};
    default:
      return state;
  }
}
