import { useNavigate, useLocation, replace } from "react-router-dom";

const TransferSuccess = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) {
    navigate("/dashboard",{replace:true});
    return null;
  }

  const data = state;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-lg rounded-2xl bg-[#111] p-10 border border-emerald-500/20 text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-emerald-500/10 blur-3xl -z-10"></div>

        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 text-4xl font-bold mb-6">
          ✓
        </div>

        <h2 className="text-3xl font-bold text-emerald-500">
          Transfer Successful
        </h2>

        <p className="text-gray-400 mt-2">
          Money sent successfully 🎉
        </p>

        <div className="mt-8 text-left space-y-4">

          <div className="flex justify-between">
            <span className="text-gray-400">Transaction ID</span>
            <span>{data.transactionId}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Receiver</span>
            <span>{data.receiverUsername}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Amount</span>
            <span className="text-emerald-400 font-semibold">
              ₹{data.amount}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Remaining Balance</span>
            <span>₹{data.remainingBalance}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Status</span>
            <span className="text-emerald-400">
              {data.status}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400">Date</span>
            <span>
              {new Date(data.timestamp).toLocaleString()}
            </span>
          </div>

        </div>

        <div className="mt-10 flex gap-4 justify-center">

          <button
            onClick={() => navigate("/dashboard",{replace:true})}
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-3 rounded-xl transition"
          >
            Go to Dashboard
          </button>

          <button
            onClick={() => navigate("/history")}
            className="border border-emerald-500/40 hover:bg-emerald-500/10 px-6 py-3 rounded-xl transition"
          >
            View History
          </button>

        </div>

      </div>
    </div>
  );
};

export default TransferSuccess;
