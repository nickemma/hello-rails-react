import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../api';

const FETCH = 'hello-rails-react/greetings/FETCH';

const initialState = {
  greeting: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH}/fulfilled`:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

export const fetchGreeting = createAsyncThunk(FETCH, async () => {
  const response = await axios.get(api);
  const data = await response.json();
  return data.message;
});
