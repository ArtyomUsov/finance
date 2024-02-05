import { Route, Routes } from "react-router-dom";
import "./App.scss";
import BalancePage from "./pages/BalancePage";
import IncomePage from "./pages/IncomePage";
import ExpensesPage from "./pages/ExpensesPage";
import NotFoundPage from "./pages/NotFoundPage";
import Header from "./components/Header";

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/finance" element={<BalancePage/>}/>
      <Route path="/income" element={<IncomePage/>}/>
      <Route path="/expenses" element={<ExpensesPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </>
  );
}

export default App;
