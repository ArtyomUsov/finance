import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EstimateType } from "../../api/api";

interface FinanceState {
  income: EstimateType[];
  expenses: EstimateType[];
  balance: number;
  strings: number;
  totalIncome: number;
  totalExpenses: number;
}

const initialState: FinanceState = {
  income: [],
  expenses: [],
  balance: 0,
  strings: 10,
  totalIncome: 0,
  totalExpenses: 0,
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    setIncome: (state, action: PayloadAction<EstimateType[]>) => {
      state.income = action.payload;
      state.totalIncome = state.income.reduce(
        (acc, estimate) => acc + +estimate.sum,
        0
      );
      state.balance = state.totalIncome - state.totalExpenses;
    },
    setExpenses: (state, action: PayloadAction<EstimateType[]>) => {
      state.expenses = action.payload;
      state.totalExpenses = state.expenses.reduce(
        (acc, estimate) => acc + +estimate.sum,
        0
      );
      state.balance = state.totalIncome - state.totalExpenses;
    },
    loadStrings: (state, action: PayloadAction<number>) => {
      state.strings = action.payload;
    },
  },
});

export const { setIncome, setExpenses, loadStrings } = financeSlice.actions;

export default financeSlice.reducer;
