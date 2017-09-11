import { combineReducers } from 'redux';
//import {reducer as form } from 'redux-form';
import booksReducer from './books_reducer';
import paginationReducer from './pagination_reducer';
import categoyReducer from './category_reducer';
import usersReducer from './users_reducer';



const rootReducer = combineReducers({
books:booksReducer,
pagination:paginationReducer,
categories:categoyReducer,
users:usersReducer
});

export default rootReducer;
