const RecentTransactions = () => {
  return (
    <div className="bg-gray-950 rounded-xl border border-green-500 shadow p-6 mt-6 text-white">
      <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>

      <div className="space-y-4">
        <div className="flex justify-between">
          <div>
            <p className="font-medium">paoap → sarah_smith</p>
            <p className="text-sm text-gray-500">Lunch payment</p>
          </div>
          <div className="text-right">
            <p className="font-bold">₹500</p>
            <p className="text-green-600 text-sm">✓ SUCCESS</p>
          </div>
        </div>

        <div className="flex justify-between">
          <div>
            <p className="font-medium">paoap → alex_kumar</p>
            <p className="text-sm text-gray-500">Project collaboration</p>
          </div>
          <div className="text-right">
            <p className="font-bold">₹1000</p>
            <p className="text-green-600 text-sm">✓ SUCCESS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentTransactions;
