import { CART_ADD_TO_CART } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find(x => x.product === parseInt(item.product));
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(x => x.product === parseInt(existItem.product) ? item : x)
                }
            }else{
                return{...state, cartItems:[...state.cartItems, item]}  
            }
        default:
            return state;
    }
}