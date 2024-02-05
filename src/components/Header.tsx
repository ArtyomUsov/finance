import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
        <Link
          style={{
            textDecorationLine: "none",
            alignContent: "center",
            display: "flex",
            flexWrap: "wrap",
          }}
          to={"/finance/"}
        >
          Баланс -{" "}
        </Link>
        <Link
          style={{
            textDecorationLine: "none",
            alignContent: "center",
            display: "flex",
            flexWrap: "wrap",
          }}
          to={"/income"}
        >
          Доходы
        </Link>
        <Link
          style={{
            textDecorationLine: "none",
            alignContent: "center",
            display: "flex",
            flexWrap: "wrap",
          }}
          to={"/expenses"}
        >
          Расходы
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
