import { Box, Chip } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/store";
import { useCallback, useEffect } from "react";
import { getExpensesEstimate, getIncomeEstimate } from "../api/api";
import { setExpenses, setIncome } from "../store/finance/financeSlice";

const Header = () => {
  const balance = useAppSelector((state) => state.finance.balance);
  const dispatch = useAppDispatch();

  const getExpenses = useCallback(async () => {
    const data = await getExpensesEstimate();
    if (data !== null) {
      dispatch(setExpenses(data));
    }
  }, [dispatch]);

  const getIncome = useCallback(async () => {
    const data = await getIncomeEstimate();
    if (data !== null) {
      dispatch(setIncome(data));
    }
  }, [dispatch]);

  useEffect(() => {
    getExpenses();
    getIncome();
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
        height: 100,
      }}
    >
      <Box
        sx={{
          alignContent: "center",
          display: "flex",
          color: "white",
          fontSize: 32,
          gap: 20,
        }}
      >
        <NavLink
          style={{
            textDecorationLine: "none",
            alignContent: "center",
            display: "flex",
            flexWrap: "wrap",
          }}
          to={"/finance"}
        >
          Баланс -{" "}
          <Chip
            sx={{
              fontSize: 30,
              p: 3,
            }}
            label={balance}
            color={balance > 0 ? "success" : "error"}
            variant="outlined"
          />
        </NavLink>
        <NavLink
          style={{
            textDecorationLine: "none",
            alignContent: "center",
            display: "flex",
            flexWrap: "wrap",
          }}
          to={"/income"}
        >
          Доходы
        </NavLink>
        <NavLink
          style={{
            textDecorationLine: "none",
            alignContent: "center",
            display: "flex",
            flexWrap: "wrap",
          }}
          to={"/expenses"}
        >
          Расходы
        </NavLink>
      </Box>
    </Box>
  );
};

export default Header;
