import { takeEvery } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';

import { fetchImages } from '../utils/flickr';


export function* loadImages() {
  try {
    console.log('inside saga load images->');
    const images = yield fetchImages();
    yield put({type: 'IMAGES_LOADED', images: images});
    console.log('i fetched these images->', images);
    yield put({type: 'IMAGE_SELECTED', image: images[0]});
  } catch(error) {
    yield put({type: 'IMAGE_LOAD_FAILURE', error});
  }
}

export function* watchForLoadImages() {
  while(true) {
    console.log('inside saga watch for load images->');
    yield take('LOAD_IMAGES');
    yield fork(loadImages);
  }
}


export default function* root() {
  yield [
    fork(loadImages),
    fork(watchForLoadImages)
  ]
}