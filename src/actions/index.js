import axios from 'axios';
export function getBooks(){
    const request=axios.get('http://localhost:3001/books');
    return {type:'list-books',payload:request}
}
