import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getPlaylistThunk } from './store/playlist';
import Nav from './Nav';
import Card from './card';
import GridLoader from 'react-spinners/GridLoader';

export default function Home(){
    const playlist = useSelector(state => state.playlist);
    const dispatch = useDispatch();

    // eslint-disable-next-line
    useEffect(() => {dispatch(getPlaylistThunk("podcasts"))}, []);

    return(
        <div className="home_page">
            <div className="logo_image"/>
            <Nav />
            {
                (playlist.items && playlist.items.length > 1)?
                <>
                    {
                        playlist.items.map(video => (
                            <Card key={video.id} video={video}/>
                        ))
                    }
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