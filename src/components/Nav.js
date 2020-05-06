import React from 'react';
import { useDispatch} from 'react-redux';
import { getPlaylistThunk, clearPlaylistThunk } from './store/playlist';

export default function Nav(){
    //const playlist = useSelector(state => state.playlist);
    const dispatch = useDispatch();

    let clickHandler = (type) => {
        dispatch(clearPlaylistThunk());
        dispatch(getPlaylistThunk(type));
    }

    return(
        <div className="navigation_bar">
            <p className="navigation_options option1" onClick={()=>{clickHandler("podcasts")}}>Podcast</p>
            <p className="navigation_options option2" onClick={()=>{clickHandler("videos")}}>Videos</p>
            <p className="navigation_options option3" onClick={()=>{clickHandler("music")}}>Charles Hussle</p>
            <p className="navigation_options option4" onClick={()=>{clickHandler("merch")}}>Merch</p>
        </div>
    )
}