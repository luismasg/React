import React, { Component } from 'react';
import {browserHistory, Router} from "react-router";
//import logo from './logo.svg';
import Header from './components/Header';
//import BookList from './components/BookList';
import bookspage from './components/bookpage';
import AddBook from './components/AddBook';

import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';




class App extends Component {

  render() {
    const store= applyMiddleware(reduxThunk,promise)(createStore)(reducers);
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <route path="/" component={bookspage}/>
          <route path="/add" component={AddBook}/>
          <route path="/links" component={Header} />
          <route path="*" component={Header}/>
        </Router>
      </Provider>
    );
  }
}

export default App;
