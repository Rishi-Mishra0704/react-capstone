import { fetchIncomeStatementData, incomeReducer } from '../../redux/IncomeSlice/IncomeSlice';
import { configureStore } from '@reduxjs/toolkit';

describe('incomeSlice', () => {
  it('should return the initial state', () => {
    expect(incomeReducer(undefined, {})).toEqual({
      data: [],
      status: 'idle',
      error: null,
    });
  });

  it('should handle fetchIncomeStatementData.pending', () => {
    expect(
      incomeReducer(
        {
          data: [],
          status: 'idle',
          error: null,
        },
        {
          type: fetchIncomeStatementData.pending.type,
        }
      )
    ).toEqual({
      data: [],
      status: 'loading',
      error: null,
    });
  });

  it('should handle fetchIncomeStatementData.fulfilled', () => {
    expect(
      incomeReducer(
        {
          data: [],
          status: 'loading',
          error: null,
        },
        {
          type: fetchIncomeStatementData.fulfilled.type,
          payload: [{ id: 1, title: 'Game 1' }],
        }
      )
    ).toEqual({
      data: [{ id: 1, title: 'Game 1' }],
      status: 'succeeded',
      error: null,
    });
  });

  it('should handle fetchIncomeStatementData.rejected', () => {
    expect(
      incomeReducer(
        {
          data: [],
          status: 'loading',
          error: null,
        },
        {
          type: fetchIncomeStatementData.rejected.type,
          error: { message: 'Error fetching income statement data' },
        }
      )
    ).toEqual({
      data: [],
      status: 'failed',
      error: 'Error fetching income statement data',
    });
  });
});

describe('fetchIncomeStatementData', () => {
  let store;

  beforeAll(() => {
    store = configureStore({
      reducer: {
        incomeStatement: incomeReducer,
      },
    });
  });

  it('should fetch income statement data', async () => {
    await store.dispatch(fetchIncomeStatementData());
    const state = store.getState().incomeStatement;

    expect(state.status).toBe('succeeded');
    expect(state.data.length).toBeGreaterThan(0);
    expect(state.error).toBeNull();
  });
});
