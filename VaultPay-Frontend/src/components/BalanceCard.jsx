const BalanceCard = () => {
  return (
    <div className="bg-linear-to-r bg-green-600 text-white rounded-2xl p-6 shadow-lg">
      <p className="text-sm opacity-80">Account Balance</p>
      <h2 className="text-4xl font-bold mt-2">₹5,000</h2>

      <div className="flex justify-between mt-6 text-sm">
        <div>
          <p className="opacity-70">Username</p>
          <p className="font-semibold">@dev</p>
        </div>
        <div>
          <p className="opacity-70">User ID</p>
          <p className="font-semibold">USER39YQKSONS</p>
        </div>
      </div>
    </div>
  );
};

export default BalanceCard;
