import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from './store/reducers/userReducer'
import { asyncIncrementCreator, asyncDecrementCreator } from './store/reducers/countReducer'

const App = () => {
	const count = useSelector(state => state.countReducer.count)
	const users = useSelector(state => state.userReducer.users)
	const dispatch = useDispatch()
	return (
		<div className="container">
			<div className="text-center fs-1 py-5 text-white">{ count }</div>
			<div className="text-center">
				<div className="btn-group">
					<button onClick={ () => dispatch(asyncIncrementCreator()) } className="btn btn-lg btn-primary">Increment++</button>
					<button onClick={ () => dispatch(asyncDecrementCreator()) } className="btn btn-lg btn-primary">Decrement--</button>
					<button onClick={ () => dispatch(fetchUsers()) } className="btn btn-lg btn-success">Get users</button>
				</div>
			</div>
			<div className="text-center pt-5 text-white">
				{ users.map((user, i) => {
					return (
						<div className="p-3 my-2 fs-3 border border-2" key={ user.id }>
							{ i + 1 }. { user.name }
						</div>
					)
				}) }
			</div>
		</div>
	)
}

export default App