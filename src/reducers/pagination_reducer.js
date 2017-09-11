
export default function (state=[],action){

  switch(action.type){
    case 'link':
    return  action.payload.split(',').map((link)=>{ return unescape(link)});

    // case 'select-book':
    // return {...state, selectedBook:action.payload}
    //
    //
    // case 'update-book':
    // return {...state};
    default:
    return state;
  }





}
