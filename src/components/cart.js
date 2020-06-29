import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPlaylistThunk } from './store/playlist';

export default function Cart(){
    const playlist = useSelector(state => state.playlist);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    useEffect(() => {dispatch(getPlaylistThunk("merch"))}, []);

    return(
        <div className="cart_modal">
            <div className="cart_title">My Cart</div>
            <div className="divider" />
            <div className="disclaimer">Disclaimer:<br/> 
            We will not use or sell your information under any circumstances. All of your responses will be sent to 
            <a className="mailto" href = "mailto: iliveincoloralways@gmail.com">iliveincoloralways@gmail.com</a>. 
            This is because we do not have payment processing set up yet. We will get in touch with you after you submit for payment and shipping information.</div>
            <CartItem />
        </div>
    )
}

function CartItem(props){
    return (
        <div className="cartItem">T-Shirt</div>
    )
}