import { put, takeEvery, call } from 'redux-saga/effects'
import { setUsers, FETCHUSERS } from '../store/reducers/userReducer'

const fetchUsersFromAPI = () =>
	fetch('https://jsonplaceholder.typicode.com/users')

function* fetchUserWorker() {
	const data = yield call(fetchUsersFromAPI)
	const json = yield call(() => new Promise(res => res(data.json())))
	yield put(setUsers(json))
}

export function* userWatcher() {
	yield takeEvery(FETCHUSERS, fetchUserWorker)
}
