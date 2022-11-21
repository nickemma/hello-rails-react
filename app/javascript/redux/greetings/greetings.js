import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../api';

const FETCH_GREET = 'FETCH_GREET';

const initialState = {
  greeting: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GREET/fulfilled':
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

export const getGreeting = createAsyncThunk(FETCH_GREET, async () => {
  const response = await fetch(api);
  const data = await response.json();
  return data.text;
});
