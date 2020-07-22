import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCartThunk } from './store/cart';

export default function Cart(props){
    // const cart = useSelector(state => state.cart);
    const cart = props.cart;
    //const dispatch = useDispatch();

    return(
        <div className="cart_modal">
            <div className="cart_title">My Cart</div>
            <div className="divider" />
            <div className="disclaimer">Disclaimer:<br/> 
            We will not use or sell your information under any circumstances. All of your responses will be sent to 
            <a className="mailto" href = "mailto: iliveincoloralways@gmail.com">iliveincoloralways@gmail.com</a>. 
            This is because we do not have payment processing set up yet. We will get in touch with you after you submit for payment and shipping information.</div>
            {
                cart.length > 0 ?
                cart.map((item, index) => 
                    <CartItem key={index} item={item} index={index}/>
                ) : 'There are not items in your cart :('
            }
        </div>
    )
}

function CartItem(props){
    const {item, index} = props;
    const dispatch = useDispatch();
    let clickHandler = (item) => {
        dispatch(removeCartThunk(item));
    }
    return (
        <div className="cards cart_item">
            <div className="card_container">
                <div className="thumbnail" style={{backgroundImage:`url(${item.thumbnails.medium.url})`}} />
            </div>
            <div className="card_container">
                <div className="card_title">{item.title}</div>
                <div className="card_description">{item.description}</div>
                <div className="card_owner">${item.price} - {item.size}</div>
            </div>
            <div className="remove_button" onClick={() => {clickHandler(index)}}></div>
        </div>
    )
}