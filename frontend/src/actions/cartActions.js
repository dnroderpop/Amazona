import axios from "axios"
import { CART_ADD_TO_CART } from "../constants/cartConstants";

export const addToCart=  (productId, qty) => async (dispatch,getState) =>{
    const {data} = await axios.get(`/api/products/${productId}`);
    dispatch({
        type: CART_ADD_TO_CART,
        payload: {
            name: data.name,
            image: data.image,
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            qty,
        }
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}