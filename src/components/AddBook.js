import React , {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import _ from 'lodash';
import Header from './Header';
import {browserHistory} from "react-router";
import { FormGroup,ControlLabel,FormControl } from 'react-bootstrap';
import uuidv1 from 'uuid/v1';
//import  '../styles/buttons.css';

class AddBook extends Component{
    constructor(props){
        console.log('contructor');
        super(props);
        this.state=({

            book:{
                name: '',
                author:'',
                category:'',
                publishedDate:'',
                user:'',
                id:''
            }
        });
    }
    componentDidMount(){
        //this.props.getBooks();
        this.props.getCategories();
        this.props.getUsers();

    }




    handleSubmit(e){
        e.preventDefault();

        this.setState({ book:
            {
                ...this.state.book,
                id:uuidv1(),
                publishedDate:new Date(),
                category: this.state.book.category || this.props.categories[0]

            }
        },()=>{

            this.props.addBook(this.state.book);

            browserHistory.replace("/");
        });
    }


    render(){
        return (
            <div>
            <Header />
            <div className="container addBook">
            <form className="col-md-offset-2 col-md-8 " onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" onChange={(e)=>{this.setState({book:{...this.state.book,name:e.target.value}})}}  value={this.state.book.name} />
            </div>
            <div className="form-group">
            <label htmlFor="author">author</label>
            <input type="text" className="form-control" id="author" onChange={(e)=>{this.setState({book:{...this.state.book,author:e.target.value}})}}  value={this.state.book.author} />
            </div>
            <FormGroup controlId="formControlsSelect">
            <ControlLabel>Category</ControlLabel>
            <FormControl componentClass="select" placeholder="Category"  onChange={(e)=>{this.setState({book:{...this.state.book,category:e.target.value}})}}  >
            { this.props.categories.map((cat)=> <option key={cat} value={cat}>{cat}</option>)}
            </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
            <ControlLabel>User</ControlLabel>
            <FormControl componentClass="select" placeholder="user" onChange={(e)=>{this.setState({book:{...this.state.book,user:e.target.value}})}}  >
         <option key={uuidv1()}  value='' > none</option>
            { this.props.users.map((user,index)=> <option key={user}  value={user} >{user}</option> )}
            </FormControl>
            </FormGroup>

            <button type="submit" className="btn btn-primary">Submit</button>
            <button  type="button" onClick={()=>{browserHistory.replace("/");}} className="btn btn-danger CancelUpdate">Cancel</button>
            </form></div></div>
        );
    }

    renderCategories(){
        const cat= this.props.categories.map(()=>{ return   <li><a href="#">HTML</a></li>});
        return {cat};
    }

}



function MapStateToProps(state){
    return {
        users:state.users,
        categories:state.categories
    };
}

export default connect(MapStateToProps,actions)(AddBook);
