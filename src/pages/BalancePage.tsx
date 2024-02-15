import { Box } from "@mui/material";
import { useAppSelector } from "../store/store";

const BalancePage = () => {
  const balance = useAppSelector((state) => state.finance.balance);
  const totalIncome = useAppSelector((state) => state.finance.totalIncome);
  const totalExpenses = useAppSelector((state) => state.finance.totalExpenses);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: 20,
      }}
    >
      <Box
        sx={{
          display: "block",
          justifyContent: "center",
          margin: 20,
        }}
      >
        <h2>Доходы за всё время</h2>
        <h2>{totalIncome}</h2>
      </Box>
      <Box
        sx={{
          display: "block",
          justifyContent: "center",
          margin: 20,
        }}
      >
        <h2>Итог</h2>
        <h2>{balance}</h2>
      </Box>
      <Box
        sx={{
          display: "block",
          justifyContent: "center",
          margin: 20,
        }}
      >
        <h2>Расходы за всё время</h2>
        <h2>{totalExpenses}</h2>
      </Box>
    </Box>
  );
};

export default BalancePage;
