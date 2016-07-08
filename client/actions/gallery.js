export const IMAGE_SELECTED = 'IMAGE_SELECTED';
export const LOAD_IMAGES = 'LOAD_IMAGES';

export function selectImage(image) {
  return async dispatch => {
    dispatch({
      type: IMAGE_SELECTED,
      image
    });
  };
}

export function loadImages() {
  return async dispatch => {
    dispatch({
      type: LOAD_IMAGES
    });
  };
}