import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
//import  '../styles/buttons.css';

class Book extends Component{
    constructor(props){
        super(props);
        this.state=({
            mode:'display',
            book:null
        });
    }
    componentDidMount(){
        //this.props.getBooks();
        this.props.getCategories();
        this.props.getUsers();

    }

    edit(){
        console.log('editing');
        this.setState({mode:'editing',book:this.props.book})
    }
    handleSubmit(e){
        e.preventDefault();
        //    console.log(e);
        this.props.updatebook(this.state.book);
        this.setState({mode:'display'});

    }
removeBook(){
    console.log('deleting');
    if(window.confirm(`This will remove "${this.props.book.name}"`)){
        this.props.deleteBook(this.props.book)
    }

}

    render(){
        const book=this.props.book;

        if (_.isEmpty(book)){
            return <p>Select a Book.</p>}
            else if(this.state.mode==='display'){
                return (
                    <div className="col-md-8 ">
                    {this.renderBook(book)}
                    </div>
                );
            }else if( this.state.mode==='editing') {
                return (
                    <div className="col-md-8 ">
                    {this.renderEditForm(book)}
                    </div>
                );
            }
        }

        renderEditForm(){

            return (
                <form className="col-md-8" onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" id="name" onChange={(e)=>{this.setState({book:{...this.state.book,name:e.target.value}})}}  value={this.state.book.name} />
                </div>
                <div className="form-group">
                <label htmlFor="author">author</label>
                <input type="text" className="form-control" id="author" onChange={(e)=>{this.setState({book:{...this.state.book,author:e.target.value}})}}  value={this.state.book.author} />
                </div>
                <div className="form-group">
                <label htmlFor="category">category</label>
                <input type="text" className="form-control" id="categoy" onChange={(e)=>{this.setState({book:{...this.state.book,category:e.target.value}})}}  value={this.state.book.category} />
                </div>
                <div className="form-group">
                <label htmlFor="publishedDate">published Date</label>
                <input type="text" className="form-control" id="publishedDate" onChange={(e)=>{this.setState({book:{...this.state.book,publishedDate:e.target.value}})}}  value={this.state.book.publishedDate} />
                </div>
                <div className="form-group">
                <label htmlFor="user">user</label>
                <input type="text" className="form-control" id="user" onChange={(e)=>{this.setState({book:{...this.state.book,user:e.target.value}})}}  value={this.state.book.user} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button  onClick={()=>{this.setState({mode:'display'})}} className="btn btn-danger CancelUpdate">Cancel</button>
                </form>
            );
        }

        renderBook(book){
            if (book) {
                return (
                    <div className="bookDetail">
                    <h1>{(book.user.length >1)? <span className="glyphicon glyphicon glyphicon-remove"  style={{color:'red'}}  ></span>:''}{book.name}  <span className="glyphicon glyphicon glyphicon-remove pull-right" style={{fontSize:20,marginRight:17}} onClick={()=>{this.removeBook()}}aria-hidden="true"></span> <span className="glyphicon glyphicon glyphicon-pencil pull-right" style={{fontSize:20,marginRight:17}} onClick={()=>{this.edit()}}aria-hidden="true"></span></h1>
                    <p>Author: {book.author}</p>
                    <p>Category: {book.category}</p>
                    <p >Date Published: {book.publishedDate}</p>
                    <p>User: {book.user}</p>
                    </div>
                );
            }
        }
    }

    function MapStateToProps(state){
        return {book:state.books.selectedBook,
            users:state.users,
            categories:state.categories
        };
    }

    export default connect(MapStateToProps,actions)(Book);
