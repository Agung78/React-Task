import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import taskReducer from './reducers/task'

const rootReducers = combineReducers({
  task: taskReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store