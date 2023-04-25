import { configureStore } from '@reduxjs/toolkit';
import { incomeReducer } from './IncomeSlice/IncomeSlice';

const store = configureStore({
  reducer: {
    incomeStatement: incomeReducer,
  },
});

export default store;
