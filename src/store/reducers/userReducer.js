const defaultState = {
	users: [],
}

export const SETUSERS = 'SETUSERS'
export const FETCHUSERS = 'FETCHUSERS'

export const userReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SETUSERS:
			return { ...state, users: action.payload }
		default:
			return state
	}
}

export const fetchUsers = () => ({ type: FETCHUSERS })
export const setUsers = payload => ({ type: SETUSERS, payload })
