import * as reducers from './reducers'
import { createStore } from 'redux'
import { combineReducers } from 'redux'



const addItineraryReducer = combineReducers(reducers)


const store = createStore(addItineraryReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)





export default store;
