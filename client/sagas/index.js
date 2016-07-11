import { takeEvery } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';

import gallerySagas from './gallery';
import imagesSagas from './images';


function startSagas(sagas) {
  let allFuncs = [];
  sagas.map(saga => {
    for(let func in saga) {allFuncs.push(fork(saga[func]));}
  });
  return allFuncs;
}


export default function* rootSaga() {
  yield startSagas([
    gallerySagas,
    imagesSagas
  ]);
};

















