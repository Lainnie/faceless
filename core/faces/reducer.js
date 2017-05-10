import { createReducer, createActions } from 'reduxsauce'
import { REHYDRATE } from 'redux-persist/constants'
import Immutable from 'seamless-immutable'

import * as t from './actionsTypes'

const INITIAL_STATE = Immutable({
  faces: [],
})

const rehydrate = (state, {payload}) => {
  return Object.assign({}, state, payload.faces)
}

const facesReceived = (state, {payload}) => {
  return Object.assign({}, state, {faces: payload.faces})
}

export const reducer = createReducer(INITIAL_STATE, {
  [REHYDRATE]: rehydrate,
  [t.FACES_RECEIVED]: facesReceived,
})
