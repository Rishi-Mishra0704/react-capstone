
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// const API_KEY = '96d411a8e4745e7bdee7866868d89741' 
const API_URL = `https://mmo-games.p.rapidapi.com/games`
const options = {
  method: 'GET',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': 'bb9bc725e3msh28882385a32ba56p10febfjsn1ae20f27f615',
    'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
  }
};
export const fetchIncomeStatementData = createAsyncThunk(
  'incomeStatement/fetchData',
  async () => {
    const response = await fetch(API_URL,options);
    const data = await response.json();
    return data;
  }
);
const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const incomeSlice = createSlice({
  name: 'incomeStatement',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncomeStatementData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchIncomeStatementData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchIncomeStatementData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const incomeReducer =  incomeSlice.reducer;