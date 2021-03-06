const defaultState = {
	count: 0,
}

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const ASYNCINCREMENT = 'ASYNCINCREMENT'
export const ASYNCDECREMENT = 'ASYNCDECREMENT'

export const countReducer = (state = defaultState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + 1 }
		case DECREMENT:
			return { ...state, count: state.count - 1 }
		default:
			return state
	}
}

export const incrementCreator = () => ({ type: INCREMENT })
export const decrementCreator = () => ({ type: DECREMENT })
export const asyncIncrementCreator = () => ({ type: ASYNCINCREMENT })
export const asyncDecrementCreator = () => ({ type: ASYNCDECREMENT })
