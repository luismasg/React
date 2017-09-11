import axios from 'axios';

export function getCategories(){
    return function(dispatch){
        axios.get('http://localhost:3001/categories').then((result)=>{
            dispatch({type:'list-categories',payload:result});//list all categories
        });
    }
}

export function getUsers(){
    return function(dispatch){
        axios.get('http://localhost:3001/users').then((result)=>{
            dispatch({type:'list-users',payload:result}); //list all users
        });
    }
}


export function getBooks(page=1){
    return function(dispatch){
        axios.get(`http://localhost:3001/books?_page=${page}&_limit=5`).then((result)=>{
            dispatch({type:'link',payload:result.headers.link}) // pull pagination links
            dispatch({type:'list-books',payload:result}); //refresh all books
            dispatch({type:'select-book', payload:result.data[0]}); //selected default book
        });
    }
}

export function selectBook(book){
    return {type:'select-book', payload:book} //select a book
}


export function addBook(book){
    console.log('the books to add is :',book);
    return function(dispatch){
    axios.post('http://localhost:3001/books',book).then((result)=>{ /* add a book */

            axios.get('http://localhost:3001/books?_page=1&_limit=5').then((data)=>{
                dispatch({type:'list-books',payload:data}); //after add , refresh book list
                dispatch({type:'link',payload:data.headers.link}) // pull pagination links
                dispatch({type:'select-book', payload:data.data[0]}); //selected default book
            })

        });
    }
}


export function updatebook(book){
    return function (dispatch){
        axios.put(`http://localhost:3001/books/${book.id}`,book).then(({data})=>{
            axios.get('http://localhost:3001/books?_page=1&_limit=5').then((data)=>{
                dispatch({type:'list-books',payload:data});
                dispatch({type:'link',payload:data.headers.link}) // pull pagination links
                dispatch({type:'select-book', payload:data.data[0]}); //selected default book
            })

        })
    }
}

export function deleteBook(book){
    return function (dispatch){
        axios.delete(`http://localhost:3001/books/${book.id}`,book).then(({data})=>{
            axios.get('http://localhost:3001/books?_page=1&_limit=5').then((data)=>{
                dispatch({type:'list-books',payload:data}); // list all books
                dispatch({type:'select-book', payload:data.data[0]}); // select first book
            })

        })
    }
}
