export default function (state={},action){
    switch(action.type){
        case 'list-books':
        return action.payload.data;
    }
    return [];
}
