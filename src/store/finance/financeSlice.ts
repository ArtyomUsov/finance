import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FinanceState {
  time: string[];
  income: number[];
  expenses: number[];
  balance: number | null;
  strings: number;
}

const initialState: FinanceState = {
  time: [],
  income: [],
  expenses: [],
  balance: null,
  strings: 10,
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    addIncome: (state, action: PayloadAction<number>) => {
      state.income = [...state.income, action.payload];
    },
    addExpenses: (state, action: PayloadAction<number>) => {
      state.expenses = [...state.expenses, action.payload];
    },
    addTime: (state, action: PayloadAction<string>) => {
      state.time = [...state.time, action.payload];
    },
    loadStrings: (state, action: PayloadAction<number>) => {
      state.strings = action.payload;
    },
  },
});

export const { addIncome, addExpenses, addTime, loadStrings } = financeSlice.actions;

export default financeSlice.reducer;

