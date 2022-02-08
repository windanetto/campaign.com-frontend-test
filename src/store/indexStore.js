import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import apiReducer from './reducer/apiReducer'
import thunk from 'redux-thunk' 

const rootReducer = combineReducers({
  apiReducer
})

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
  )
)

export default store