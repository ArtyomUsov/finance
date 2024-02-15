import { Box, Button, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCallback, useEffect, useState } from "react";
import { getExpensesEstimate } from "../api/api";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setExpenses } from "../store/finance/financeSlice";
import Header from "../components/Header";

const ExpensesPage = () => {
  const [source, setSource] = useState<String>("");
  const [sum, setSum] = useState<number>();
  const expenses = useAppSelector((store) => store.finance.expenses);
  // const dispatch = useAppDispatch();

  const addExpenses = () => {
    const currentDate = new Date().toLocaleString();
    fetch(
      "https://b-base-fce24-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
      {
        method: "POST",
        body: JSON.stringify({
          date: currentDate,
          sum: sum,
          source: source,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    // getExpenses();
    setSource("");
    setSum(+"");
  };

  // const getExpenses = useCallback(async () => {
  //   const data = await getExpensesEstimate();
  //   if (data !== null) {
  //     dispatch(setExpenses(data));
  //   }
  // }, [dispatch]);

  const heandleclick = async () => {
    addExpenses();
  };

  // useEffect(() => {
  //   getExpenses();
  // }, []);

  return (
    <Box sx={{ maxWidth: 600, margin: "auto" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          mb: 4,
          gap: 4,
        }}
      >
        <TextField
          id="outlined-basic"
          type="text"
          label="Источник"
          variant="outlined"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <TextField
          type=""
          id="outlined-basic"
          label="Сумма"
          variant="outlined"
          value={sum}
          onChange={(e) => setSum(+e.target.value)}
        />
        <Button
          variant="outlined"
          color="success"
          onClick={heandleclick}
          disabled={!source && !sum}
        >
          Создать
        </Button>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Источник</TableCell>
              <TableCell align="center">Сумма</TableCell>
              <TableCell align="right">Дата</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {expenses.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="center">{item.source}</TableCell>
                <TableCell align="center">
                  {item.sum}
                  {` р`}
                </TableCell>
                <TableCell align="right">{item.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ExpensesPage;
