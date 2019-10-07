import axios from 'axios';
import { push } from 'connected-react-router';

const GET_USER = 'GET_USER';
const NO_USER = {};

export const getUser = newUser => ({
  user: newUser,
  type: GET_USER
});

export const getUserThunk = () => async dispatch => {
  try {
    const res = await axios.get('/auth/me');
    if (res.data.id) {
      dispatch(getUser(res.data));
      dispatch(push('/home'));
    } else {
      dispatch(getUser(NO_USER));
      dispatch(push('/'));
    }
  } catch (err) {
    console.error(err);
  }
};

export const userSubscribesThunk = showInformation => async dispatch => {
  try {
    if (showInformation.date) {
      const calendarEvent = {
        summary: showInformation.summary,
        description: showInformation.description,
        start: {
          dateTime: showInformation.date + 'T00:00:00-05:00',
          timeZone: 'America/New_York'
        },
        end: {
          dateTime: showInformation.date + 'T23:59:00-05:00',
          timeZone: 'America/New_York'
        },
        reminders: {
          useDefault: true
        }
      };
      await axios.post('/api/calendar', calendarEvent);
    }
    await axios.put('/api/user/subscribe', { tvId: showInformation.id });
    const { data } = await axios.get('/auth/me');
    dispatch(getUser(data));
  } catch (err) {
    console.error(err);
  }
};

export const postCalendarThunk = calendarEvent => async dispatch => {
  try {
    const res = await axios.post('/api/calendar', calendarEvent);
    console.log('DATA ON FRONTEND IS', res);
  } catch (err) {
    console.error(err);
    console.error(err.stack);
  }
};

const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.user;
    default:
      return state;
  }
}