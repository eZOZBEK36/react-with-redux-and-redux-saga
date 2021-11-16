import { rootWatcher } from '../saga/index'
import createSagaMiddleware from 'redux-saga'
import { userReducer } from './reducers/userReducer'
import { countReducer } from './reducers/countReducer'
import { combineReducers, createStore, applyMiddleware } from 'redux'

const sageMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
	countReducer,
	userReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sageMiddleware))

sageMiddleware.run(rootWatcher)
