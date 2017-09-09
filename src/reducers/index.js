import { combineReducers } from 'redux';
//import {reducer as form } from 'redux-form';
import booksReducer from './books_reducer';


const rootReducer = combineReducers({
books:booksReducer
});

export default rootReducer;
