import { Box, Button, TextField } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { EstimateType } from "../api/api";


const IncomePage = () => {
  const [sourceText, setSourceText] = useState<String>("");
  const [sum, setSum] = useState<number>();
  const [income, setIncome] = useState<EstimateType[]>([]);

  const addIncome = () => {
    fetch(
      "https://b-base-fce24-default-rtdb.europe-west1.firebasedatabase.app/estimate.json",
      {
        method: "POST",
        body: JSON.stringify({
          time: "currentTime",
          income: sum,
          description: sourceText,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const getIncome = () => {
    fetch(
      "https://b-base-fce24-default-rtdb.europe-west1.firebasedatabase.app/estimate.json"
    )
      .then((res) => res.json())
      .then((data) => {
        const result = [];
        for (const key in data) {
          result.push({
            id: key,
            source: data[key].source,
            sum: data[key].sum,
            date: data[key].date,
          });
        }
        setIncome(result);
      });
  };
  const heandleclick = () => {addIncome()};

  useEffect(() => {
    getIncome();
  }, [heandleclick]);



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
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
        />
        <TextField
          type=""
          id="outlined-basic"
          label="Сумма"
          variant="outlined"
          value={sum}
          onChange={(e) => setSum(+(e.target.value))}
        />
        <Button
          variant="outlined"
          color="success"
          onClick={heandleclick}
          disabled={!sourceText && !sum}
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
              <TableRow
                key={item.date}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">{item.source}</TableCell>
                <TableCell align="center">{item.sum}</TableCell>
                <TableCell align="right" component="th" scope="row">
                  {item.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default IncomePage;
