import { createStore, applyMiddleware, combineReducers } from 'redux'
import { AsyncStorage } from 'react-native'
//import createSagaMiddleware from 'redux-saga'
import { persistStore, autoRehydrate } from 'redux-persist'
import { createLogger } from 'redux-logger';
import concat from 'lodash/concat'

import {
  reducer as facesReducer
} from './core/faces'

const logger = createLogger()

//const sagas = function* () {
  //yield concat(listsSaga, manageExperienceSaga, manageListSaga, manageUserSaga)
//}

const reducers = combineReducers({
  faces: facesReducer,
})

//const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  //applyMiddleware(sagaMiddleware, logger),
  autoRehydrate()
)

//sagaMiddleware.run(sagas)

const purgeReducers = []

persistStore(store, {storage: AsyncStorage}).purge(purgeReducers)

export default store
