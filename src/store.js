import { combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { TodoReducer } from './reducers/TodoReducers';
const rootReducer = combineReducers({
    Todo:TodoReducer
})

const initialState = {}

// const middleware = [thunk]

const store = configureStore({reducer: rootReducer })

export default store