import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getPlaylistThunk } from './store/playlist';
import Nav from './Nav';
import Card from './card';
import Cart from './cart';
import GridLoader from 'react-spinners/GridLoader';
import Social from './social';

export default function Home(){
    const playlist = useSelector(state => state.playlist);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [showCart, setCartState] = React.useState(false);

    // eslint-disable-next-line
    useEffect(() => {dispatch(getPlaylistThunk("music"))}, []);

    const toggleCart = () => {
        setCartState(!showCart)
    }

    return(
        <div className="home_page">
            <div className="cart_icon" onClick={toggleCart}>
                {(cart.cart && cart.cart.length) ? (<div className="cart_counter">{cart.cart.length}</div>) : ''}
            </div>
            {showCart && (
                <>
                <Cart cart={cart.cart} />
                <div className="cart_background" onClick={toggleCart}/>
                </>
            )}
            <a href="https://www.youtube.com/channel/UCh4NcC_WCUwCDCu5t2DuT5A/featured" target="_blank" rel="noopener noreferrer">
                <div className="logo_image"/>
            </a>
            <Nav />
            {
                (playlist.items && playlist.items.length > 0)?
                <>
                    {
                        playlist.items.map(video => (
                            <Card key={video.id} video={video} kind={playlist.kind}/>
                        ))
                    }
                    
                    <Social />
                </>
                :
                <>
                    <div className="loading_animation">
                        <GridLoader
                            heightUnit="px"
                            widthUnit="px"
                            height={130}
                            width={30}
                            color="rgba(255,0,228,1)"
                        />
                    </div>
                    <p className="loading">Loading Playlist...</p>
                </>
            }
            <Card />
        </div>
    )
}


//twitter, soundcloud, instagram, youtube, email