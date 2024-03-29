import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

axios.defaults.baseURL = 'https://65a9415a219bfa371868e5bc.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async ({ value = '', page = 1 }, thunkAPI) => {
    const params = new URLSearchParams({
      make: value,
      page,
      limit: 12,
    });

    try {
      const { data } = await axios.get(`/adverts/?${params}`);
      return data;
    } catch (error) {
      toast.error('Oops. Something is wrong. Please try again!');
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
