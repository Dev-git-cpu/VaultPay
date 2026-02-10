import Navbar from "../../components/Navbar";

const TransactionHistory = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar/>

      <div className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-xl font-bold mb-4">Transaction History</h2>

        <div className="bg-gray-950 rounded-xl shadow overflow-hidden border-2 border-green-500">
          <table className="w-full">
            <thead className="bg-green-500 text-black">
              <tr>
                <th className="p-3 text-left">Transaction</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3">
                  paoap → sarah_smith
                  <div className="text-sm text-gray-500">Lunch</div>
                </td>
                <td className="p-3 text-center">₹500</td>
                <td className="p-3 text-green-600 text-center">SUCCESS</td>
              </tr>

              <tr className="border-t">
                <td className="p-3">
                  paoap → alex_kumar
                  <div className="text-sm text-gray-500">Project</div>
                </td>
                <td className="p-3 text-center">₹1000</td>
                <td className="p-3 text-green-600 text-center">SUCCESS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
