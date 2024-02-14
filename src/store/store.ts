import { configureStore } from "@reduxjs/toolkit";
import financeSlice from "./finance/financeSlice";

export const store = configureStore({
  reducer: {
    finance: financeSlice
  },
});