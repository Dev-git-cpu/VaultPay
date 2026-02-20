import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/DashBoard";
import Transfer from "./pages/transfer/Transfer";
import TransactionHistory from "./pages/history/TransactionHistory";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/SignUp";
import LandingPage from "./pages/LandingPage";
import ProfilePage from "./pages/ProfilePage";
import TransferSuccess from "./pages/TransferSuccess";
import PrivateRoute from "./component/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

        <Route path="/profile" element={<PrivateRoute> <ProfilePage/> </PrivateRoute>} />
          
        <Route path="/transfer" element={<PrivateRoute> <Transfer /> </PrivateRoute>} />

        <Route path="/transferSuccess" element={<PrivateRoute><TransferSuccess /></PrivateRoute> } />

        <Route path="/history" element={<PrivateRoute><TransactionHistory /></PrivateRoute>} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
