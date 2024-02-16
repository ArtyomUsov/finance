import { Box, Chip, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../store/store";

const BalancePage = () => {
  const balance = useAppSelector((state) => state.finance.balance);
  const totalIncome = useAppSelector((state) => state.finance.totalIncome);
  const totalExpenses = useAppSelector((state) => state.finance.totalExpenses);

  return (
    <Grid container spacing={4} sx={{mt:10}}>
      <Grid item xs={6}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">Доходы за всё время</Typography>
        </Box>
      </Grid>

      <Grid item xs={6}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">Расходы за всё время</Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ textAlign: "center" }}>
          <Chip
            sx={{
              fontSize: 30,
              p: 3,
            }}
            label={totalIncome}
            color="success"
            variant="outlined"
          />
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ textAlign: "center" }}>
          <Chip
            sx={{
              fontSize: 30,
              p: 3,
            }}
            label={totalExpenses}
            color="error"
            variant="outlined"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h4">Итог</Typography>
        </Box>
      </Grid>
      
      <Grid item xs={12}>
        <Box sx={{ textAlign: "center" }}>
          <Chip
            sx={{
              fontSize: 30,
              p: 3,
            }}
            label={balance}
            color={balance > 0 ? "success" : "error"}
            variant="outlined"
          />
        </Box>
      </Grid>
      
    </Grid>
  );
};

export default BalancePage;
