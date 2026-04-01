import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const TransactionHistory = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchTransactions = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const res = await axios.get(`${API_URL}/api/transactions/history`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("History:", res.data);

        setTransactions(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        console.error("Error fetching transactions:", err);
        setTransactions([]);
      }
    };

    fetchTransactions();
    const interval = setInterval(fetchTransactions,3000);
    return () => clearInterval(interval)
  }, []);

  const filteredTransactions = transactions.filter((tx) => {
    const isSent = tx.type?.toLowerCase() === "sent";
    if (filter === "sent" && !isSent) return false;
    if (filter === "received" && isSent) return false;
    return true;
  });
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <nav className="flex items-center justify-between px-10 py-6 border-b border-emerald-500/20">
        <h1
          onClick={() => navigate("/dashboard")}
          className="text-2xl font-bold text-emerald-500 tracking-wide cursor-pointer"
        >
          VaultPay
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-5 py-2 rounded-xl transition"
        >
          Back to Dashboard
        </button>
      </nav>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h2 className="text-3xl font-bold">Transaction History</h2>
          <p className="text-gray-400 mt-2">
            View all your transfers and payments
          </p>
        </div>

        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg ${
              filter === "all"
                ? "bg-emerald-500 text-black"
                : "bg-[#111] border border-emerald-500/20"
            }`}
          >
            All
          </button>

          <button
            onClick={() => setFilter("sent")}
            className={`px-4 py-2 rounded-lg ${
              filter === "sent"
                ? "bg-emerald-500 text-black"
                : "bg-[#111] border border-emerald-500/20"
            }`}
          >
            Sent
          </button>

          <button
            onClick={() => setFilter("received")}
            className={`px-4 py-2 rounded-lg ${
              filter === "received"
                ? "bg-emerald-500 text-black"
                : "bg-[#111] border border-emerald-500/20"
            }`}
          >
            Received
          </button>
        </div>

        <div className="rounded-2xl border border-emerald-500/10 bg-[#111] p-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-separate border-spacing-y-5">
              <thead>
                <tr className="text-gray-400 border-b border-emerald-500/10">
                  <th>User</th>
                  <th>Type</th>
                  <th>Amount</th>
                  <th>Message</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {filteredTransactions.map((tx, index) => {
                  const isSent = tx.type?.toLowerCase() === "sent";

                  return (
                    <tr key={index} className="border-b border-emerald-500/10">
                      <td>{tx.otherPersonUsername}</td>

                      <td className={isSent ? "text-red-400" : "text-emerald-400"}>
                        {tx.type}
                      </td>

                      <td className={isSent ? "text-red-500" : "text-emerald-500"}>
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

export default TransactionHistory;