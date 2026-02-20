import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Transfer = () => {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const transferHandler = async () => {
    const userId = localStorage.getItem("userId");

    if (!to || !amount) {
      toast.warning("Receiver and amount required");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/api/transactions/transfer?senderUserId=${userId}`,
        {
          identifier: to,         
          amount: Number(amount),
          message: message,
        }
      );

      toast.success("Transfer Successful");

      navigate("/transferSuccess", { state: response.data,replace:true });

    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Transfer Failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center px-6">
      <div className="relative w-full max-w-xl">

        <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-3xl"></div>

        <div className="relative bg-[#111] rounded-3xl p-10 border border-emerald-500/10 shadow-2xl">

          <h2 className="text-3xl font-bold text-white">
            Transfer Money
          </h2>

          <p className="text-gray-400 mt-2">
            Send money to anyone, instantly
          </p>

          <div className="mt-8 space-y-6">

            {/* Receiver */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Receiver Username
              </label>
              <input
                value={to}
                onChange={(e) => setTo(e.target.value)}
                type="text"
                placeholder="username"
                className="w-full bg-[#0f0f0f] border border-emerald-500/10 rounded-xl px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Amount (₹)
              </label>
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                type="number"
                placeholder="1000"
                className="w-full bg-[#0f0f0f] border border-emerald-500/10 rounded-xl px-4 py-3 text-white"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Message (Optional)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                placeholder="Add a note..."
                className="w-full bg-[#0f0f0f] border border-emerald-500/10 rounded-xl px-4 py-3 text-white"
              ></textarea>
            </div>

            <button
              onClick={transferHandler}
              className="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-4 rounded-2xl"
            >
              Send Money
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;