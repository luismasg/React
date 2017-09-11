
export default function (state=[],action){

  switch(action.type){
    case 'list-users':
    return  action.payload.data;

    default:
    return state;
  }





}
