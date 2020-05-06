import axios from 'axios';
import merch from './merch.js';

const GET_PLAYLIST = 'GET_PLAYLIST';
const CLEAR_PLAYLIST = 'CLEAR_PLAYLIST';

export const getPlaylist = playlist => ({
  playlist,
  type: GET_PLAYLIST
});

export const clearPlaylist = () => ({
    playlist: {},
    type: CLEAR_PLAYLIST
  });

export const getPlaylistThunk = (playlistType) => async dispatch => {
  try {
    if(playlistType === 'merch'){
      dispatch(getPlaylist(merch));
    } else {
      const res = await axios.get(`/api/${playlistType}`);
      dispatch(getPlaylist(res.data));
    }
  }
  catch (err) {
    console.error(err);
  }
};

export const clearPlaylistThunk = () => dispatch => {
    try {
      dispatch(clearPlaylist());
      }
    catch (err) {
      console.error(err);
    }
  };

const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYLIST:
      return action.playlist;
    case CLEAR_PLAYLIST:
        return action.playlist;
    default:
      return state;
  }
}