
export default function (state={ books:[],selectedBook:{} },action){

  switch(action.type){
    case 'list-books':
    return  {...state,books:action.payload.data};

    case 'select-book':
    return {...state, selectedBook:action.payload}


    case 'update-book':
    return {...state};
    default:
    return state;
  }





}
