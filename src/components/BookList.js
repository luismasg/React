import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router'
//import  '../styles/buttons.css';

class BookList extends Component{

    componentDidMount(){
        this.props.getBooks();
    }

    renderBooks(){
        //  console.log(this.props);
        return this.props.books.map((book)=>{
            return (
                <button type="button" key={book.id}  onClick={()=>{
                    this.props.selectBook(book);
                    //list-group-item BookListButton
                }} className={(book.user.length > 1)?'list-group-item BookListButton unavailable':'list-group-item BookListButton available'}>{book.name}</button>
            );
        })
    }
    getNextPage(){
        this.props.getUsers(2);
    }
    renderPaginationButtons(){
        const page= this.props.pagination && this.props.pagination.map((page,index)=>{
            return  <li key={index} onClick={()=>{this.props.getBooks(index+1)}}><a href="#" onClick={(e)=>{e.preventDefault()}}>{index+1}</a></li>
        });
        return page;
    }
    render(){
        return (
            <div className="col-md-4">
                <div className="list-group">
                    {this.renderBooks()}
                    <ul className="pagination">
             {this.renderPaginationButtons()}
                    </ul>
                </div>

                <div className="addFAB pull-right">
                    <MuiThemeProvider>
                        <Link to="/add">
                            <FloatingActionButton secondary={false} >
                                <span className="glyphicon glyphicon glyphicon-plus" onClick={()=>{}} aria-hidden="true"></span>
                            </FloatingActionButton>
                        </Link>
                    </MuiThemeProvider>
                </div>

            </div>
        );
    }
}

function MapStateToProps(state){
    return {
        books:state.books.books,
        pagination:state.pagination
    };
}

export default connect(MapStateToProps,actions)(BookList);
