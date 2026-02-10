import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/DashBoard";
import Transfer from "./pages/transfer/Transfer";
import TransactionHistory from "./pages/history/TransactionHistory";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/history" element={<TransactionHistory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
