import { useNavigate } from "react-router-dom";

const ActionButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      <button
        onClick={() => navigate("/transfer")}
        className="bg-black hover:bg-green-600 text-white py-3 rounded-xl font-semibold"
      >
        💸 Transfer Money
      </button>

      <button
        onClick={() => navigate("/history")}
        className="bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
      >
        📊 Transaction History
      </button>
    </div>
  );
};

export default ActionButtons;
