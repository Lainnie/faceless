import { createStore, applyMiddleware, combineReducers } from 'redux'
import { AsyncStorage } from 'react-native'
import createSagaMiddleware from 'redux-saga'
import { persistStore, autoRehydrate } from 'redux-persist'
import { createLogger } from 'redux-logger';
import concat from 'lodash/concat'

import {
  reducer as facesReducer,
} from './core/faces/reducer'

import {
  saga as facesSaga,
} from './core/faces/saga'

const logger = createLogger()

const sagas = function* () {
  yield concat(facesSaga, [])
}

const reducers = combineReducers({
  faces: facesReducer,
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger),
  autoRehydrate()
)

sagaMiddleware.run(sagas)

const purgeReducers = []

persistStore(store, {storage: AsyncStorage}).purge(purgeReducers)

export default store
