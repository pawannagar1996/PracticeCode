import {Add_TO_CART} from "../Constant"


export const addToCart = (data) =>{

    console.log("data",data)
    return {
        type :Add_TO_CART,
        data : data
    }
}