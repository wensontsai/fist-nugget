import { takeEvery } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';

import { fetchImages } from '../utils/flickr';


export function* loadImages() {
  const images = yield fetchImages();
  yield put({type: 'IMAGES_LOADED', images})
}

export function* watchForLoadImages() {
  while(true) {
    yield take('LOAD_IMAGES');
    yield loadImages();
  }
}


export default function* root() {
  yield [
    fork(loadImages),
    fork(watchForLoadImages)
  ]
}