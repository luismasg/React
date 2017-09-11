import Header from './Header.js'
import React from 'react';
import BookList from './BookList';
import Book from './Book';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const bookspage = () =>{
return (
<div >

    <Header />
    <div className="container content">
    <BookList />
    <Book />
    <div className="addFAB">

    </div>

    </div>

</div>
);

};

export default bookspage;
