import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
//import  '../styles/buttons.css';

class BookList extends Component{
    
    componentDidMount(){
        this.props.getBooks();
    }

    renderBooks(){
        return this.props.books.map((book)=>{
            return <li key={book.id}>{book.name}</li>;
        })
    }
    render(){
        return (
            <ul>
                {this.renderBooks()}
            </ul>
        );
    }
}

function MapStateToProps({books}){
    return {books};
}

export default connect(MapStateToProps,actions)(BookList);
