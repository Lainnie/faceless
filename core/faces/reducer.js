import { createReducer, createActions } from 'reduxsauce'
import { REHYDRATE } from 'redux-persist/constants'
import Immutable from 'seamless-immutable'

const INITIAL_STATE = Immutable({
  faces: [],
})

const rehydrate = (state, {payload}) => {
  return Object.assign({}, state, payload.faces)
}

export const reducer = createReducer(INITIAL_STATE, {
  [REHYDRATE]: rehydrate,
})
