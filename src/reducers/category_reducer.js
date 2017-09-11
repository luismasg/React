
export default function (state=[],action){

  switch(action.type){
      
    case 'list-categories':
    return  action.payload.data;


    default:
    return state;
  }





}
