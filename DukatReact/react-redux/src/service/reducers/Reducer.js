

import { Add_TO_CART } from "../Constant";

// const initialState = {
//     cardData : []
// }

export default function cardItem (state=[],action){
console.log("reducer",action.data)
    switch(action.type){
        case Add_TO_CART : 
        return[
            ...state,
            {cardData : action.data} ]
        break;
        default:
        return state
    }
}