import { Typography } from "@mui/material";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer>
        <Typography
          sx={{
            mt: 70,
            display: "flex",
            justifyContent: "center",
          }}
        >
          2024
        </Typography>
      </footer>
    </>
  );
};

export default Layout;
