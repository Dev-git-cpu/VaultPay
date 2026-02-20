import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
  const fetchData = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("No userId found in localStorage");
      return;
    }

    const storedUsername = localStorage.getItem("username");
    setUsername(storedUsername || "");

    try {
      const balanceRes = await axios.get(
        `http://localhost:8080/api/wallet/balance?userId=${userId}`
      );
      setBalance(balanceRes.data.balance);

      const txRes = await axios.get(
        `http://localhost:8080/api/transactions/latest?userId=${userId}`
      );
      setTransactions(txRes.data.slice(0, 3));

    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      setBalance(0);       
      setTransactions([]);
    }
  };

  fetchData();
}, []);

  const logoutHandler = () => {
    localStorage.clear();
    navigate("/login",{replace:true});
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      <nav className="flex items-center justify-between px-10 py-6 border-b border-emerald-500/20">
        <h1 className="text-2xl font-bold text-emerald-500 tracking-wide">
          VaultPay
        </h1>

        <div className="flex items-center gap-6">
          <div
            onClick={() => navigate("/profile")}
            className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-semibold cursor-pointer"
          >
            {username?.charAt(0).toUpperCase()}
          </div>

          <button
            onClick={logoutHandler}
            className="text-gray-300 hover:text-emerald-400 transition"
          >
            Logout
          </button>
        </div>
      </nav>

      <div className="px-8 md:px-16 py-10">

        <div>
          <h2 className="text-3xl font-bold">Welcome, {username}</h2>
          <p className="text-gray-400 mt-2">
            Manage your secure wallet and transactions
          </p>
        </div>

        <div className="relative mt-10 rounded-2xl bg-[#111] p-10 flex flex-col md:flex-row md:items-center md:justify-between overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500/10 blur-3xl -z-10"></div>

          <div>
            <p className="text-gray-400">Wallet Balance</p>
            <h3 className="text-5xl font-bold text-emerald-500 mt-4">
              ₹{balance}
            </h3>
          </div>

          <div className="mt-8 md:mt-0 flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate("/transfer")}
              className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-4 rounded-2xl"
            >
              Transfer Money
            </button>

            <button
              onClick={() => navigate("/history")}
              className="border border-emerald-500/40 text-emerald-400 font-semibold px-8 py-4 rounded-2xl"
            >
              Transaction History
            </button>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-emerald-500/10 bg-[#111] p-8">
          <h3 className="text-xl font-semibold mb-6">Recent Transactions</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-5">
              <thead>
                <tr className="text-gray-400 border-b border-emerald-500/10 ">
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
      <tr key={index} className="border-b border-emerald-500/10">
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