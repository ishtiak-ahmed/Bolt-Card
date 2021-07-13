import data from "../data";

const initialRequest = [...data];

const reducer = (requests = initialRequest, action) => {
    switch(action.type){
        case 'ADD_REQUEST': 
            return requests
        default:
            return requests
    }
}

export default reducer;