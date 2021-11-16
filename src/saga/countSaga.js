import { put, takeEvery } from 'redux-saga/effects'
import {
	ASYNCINCREMENT,
	ASYNCDECREMENT,
	incrementCreator,
	decrementCreator,
} from '../store/reducers/countReducer'

const delay = ms => new Promise(res => setTimeout(res, ms))

function* incrementWorker() {
	yield delay(1000)
	yield put(incrementCreator())
}
function* decrementWorker() {
	yield delay(1000)
	yield put(decrementCreator())
}

export function* countWatcher() {
	yield takeEvery(ASYNCINCREMENT, incrementWorker)
	yield takeEvery(ASYNCDECREMENT, decrementWorker)
}
