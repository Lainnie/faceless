import { put, call, select, takeEvery, takeLatest } from 'redux-saga/effects'

import * as t from './actionsTypes'
import actions from './actions'

export function* facesReceived ({payload}) {
  yield put(actions.facesReceived())
}

export const saga = [
  takeLatest(t.DB_FACES_RECEIVED, facesReceived),
]
