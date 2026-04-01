import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;
const RESOLVEHUB_URL = "https://resolvehubfrontend.vercel.app/";

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      const storedUsername = localStorage.getItem("username");
      setUsername(storedUsername || "");

      try {
        const balanceRes = await axios.get(`${API_URL}/api/wallet/balance`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBalance(balanceRes.data.balance);

        const txRes = await axios.get(`${API_URL}/api/transactions/latest`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setTransactions(txRes.data.slice(0, 3));
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        if (error.response?.status === 401) {
          localStorage.clear();
          navigate("/login");
        }
        setBalance(0);
        setTransactions([]);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, [navigate]);

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-4 md:px-10 py-4 border-b border-emerald-500/20">
        <h1 className="text-xl md:text-2xl font-bold text-emerald-500 tracking-wide">
          VaultPay
        </h1>

        <div className="flex items-center gap-4 md:gap-6">

           <button
    onClick={() => window.open(RESOLVEHUB_URL, "_blank")}
    className="border border-red-500/40 text-red-400 hover:bg-red-500/10 px-3 md:px-4 py-1.5 md:py-2 rounded-xl text-xs md:text-sm transition cursor-pointer"
  >
    Report Issue
  </button>
          <div
            onClick={() => navigate("/profile")}
            className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-semibold cursor-pointer"
          >
            {username?.charAt(0).toUpperCase()}
          </div>

          <button
            onClick={logoutHandler}
            className="text-gray-300 hover:text-emerald-400 transition text-sm md:text-base"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="px-4 md:px-16 py-8 md:py-10">

        <div>
          <h2 className="text-2xl md:text-3xl font-bold">Welcome, {username}</h2>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            Manage your secure wallet and transactions
          </p>
        </div>

        {/* Wallet Card */}
        <div className="relative mt-8 md:mt-10 rounded-2xl bg-[#111] p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500/10 blur-3xl -z-10"></div>

          <div>
            <p className="text-gray-400 text-sm md:text-base">Wallet Balance</p>
            <h3 className="text-3xl md:text-5xl font-bold text-emerald-500 mt-2 md:mt-4">
              ₹{balance}
            </h3>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3 md:gap-4">
            <button
              onClick={() => navigate("/transfer")}
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 md:px-8 py-3 md:py-4 rounded-2xl text-sm md:text-base"
            >
              Transfer Money
            </button>

            <button
              onClick={() => navigate("/history")}
              className="border border-emerald-500/40 text-emerald-400 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-2xl text-sm md:text-base"
            >
              Transaction History
            </button>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="mt-8 md:mt-14 rounded-2xl border border-emerald-500/10 bg-[#111] p-4 md:p-8">
          <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Recent Transactions</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-3 md:border-spacing-y-5 text-sm md:text-base">
              <thead>
                <tr className="text-gray-400">
                  <th>User</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((tx, index) => {
                  const isDebit = tx.type?.toLowerCase() === "sent";

                  return (
                    <tr key={index}>
                      <td>{tx.otherPersonUsername}</td>
                      <td className={isDebit ? "text-red-400" : "text-emerald-400"}>
                        {tx.type}
                      </td>
                      <td className={isDebit ? "text-red-500" : "text-emerald-500"}>
                        ₹{tx.amount}
                      </td>
                      <td className="text-gray-400">{tx.message}</td>
                      <td className="text-emerald-400">{tx.status}</td>
                      <td className="text-gray-500">
                        {new Date(tx.date).toLocaleDateString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;