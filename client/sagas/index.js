import { takeEvery } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';

import gallerySagas from './gallery';
import imagesSagas from './images';


function startSagas(sagas) {
  return sagas.map(saga => Object.keys(saga)
    .map(function (func) {return fork(saga[func])} ) )
    .reduce(function(a, b) {
      return a.concat(b) 
    });
}


export default function* rootSaga() {
  yield startSagas([
    gallerySagas,
    imagesSagas
  ]);
};

















