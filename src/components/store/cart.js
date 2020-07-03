const GET_CART = 'GET_CART';
const CLEAR_CART = 'CLEAR_CART';
const ADD_CART = 'ADD_CART';
const REMOVE_CART = 'REMOVE_CART';

export const getCart = () => ({
    type: GET_CART
}); 

export const addCart = (item) => ({
    item,
    type: ADD_CART
}); 

export const addCartThunk = (item) => dispatch => {
    dispatch(addCart(item));
};

const initialState = {cart:[]};

export default function user(state = initialState, action) {
  switch (action.type) {
    case ADD_CART:
        return {cart: [...state.cart, action.item]}
    default:
      return state;
  }
}