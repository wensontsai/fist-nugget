import { takeEvery } from 'redux-saga';
import { take, put, call, fork, select } from 'redux-saga/effects';

import gallerySagas from './gallery';
import imagesSagas from './images';


function startSagas(...sagas) {
  let allFuncs = [];
  sagas.map(saga => saga.map(func => {
    for(let x in func) {
      allFuncs.push(fork(func[x]));
    }
  }));
  return allFuncs;
}


export default function* rootSaga() {
  yield startSagas([
    gallerySagas,
    imagesSagas
  ]);
};

















