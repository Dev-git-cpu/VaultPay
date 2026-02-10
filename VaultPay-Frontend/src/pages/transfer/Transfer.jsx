import Navbar from "../../components/Navbar";

const Transfer = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      <div className="flex justify-center mt-12">
        <div className="bg-gray-950 rounded-2xl shadow-lg p-8 w-full max-w-md border-2 hover:border-green-500">
          <h2 className="text-xl font-bold mb-2 text-green-500">Transfer Money</h2>
          <p className="text-sm text-gray-500 mb-4">
            Current balance: ₹5,000
          </p>

          <input
            className="w-full border p-2 rounded mb-3 text-white placeholder-gray-600 border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Receiver username or user ID"
          />

          <input
            className="w-full border p-2 rounded mb-3 text-white placeholder-gray-600 border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Amount (INR)"
          />

          <textarea
            className="w-full border p-2 rounded mb-4 text-white  placeholder-gray-600 border-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
            placeholder="Message (optional)"
          />

          <div className="flex gap-4">
            <button className="flex-1 bg-green-600 text-white py-2 rounded-lg cursor-pointer">
              Transfer
            </button>
            <button className="flex-1 border py-2 rounded-lg bg-black text-white cursor-pointer">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;
