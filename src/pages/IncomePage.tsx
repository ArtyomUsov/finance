import { Box, Button, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useCallback, useEffect, useState } from "react";
import { getIncomeEstimate } from "../api/api";
import { useAppDispatch, useAppSelector } from "../store/store";
import { setIncome } from "../store/finance/financeSlice";

const IncomePage = () => {
  const [source, setSource] = useState<String>("");
  const [sum, setSum] = useState<number>();
  const income = useAppSelector((store) => store.finance.income);
  // const dispatch = useAppDispatch();

  const addIncome = () => {
    const currentDate = new Date().toLocaleString();
    fetch(
      "https://b-base-fce24-default-rtdb.europe-west1.firebasedatabase.app/income.json",
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
    // getIncome();
    setSource("");
    setSum(+"");
  };

  // const getIncome = useCallback(async () => {
  //   const data = await getIncomeEstimate();
  //   if (data !== null) {
  //     dispatch(setIncome(data));
  //   }
  // }, [dispatch]);

  const heandleclick = async () => {
    addIncome();
  };

  // useEffect(() => {
  //   getIncome();
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
            {income.map((item) => (
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

export default IncomePage;
