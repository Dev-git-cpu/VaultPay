const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-8 py-4 bg-black border-b border-green-500">
      {/* Left Section */}
      <div>
        <h1 className="text-3xl font-extrabold text-green-500">
          VaultPay
        </h1>

        <p className="text-white text-lg mt-1">
          Welcome, <span className="text-green-500">Dev Sonone!</span>
        </p>
        <p className="text-gray-400 text-sm">@dev</p>
      </div>

      {/* Right Section */}
      <button className="px-4 py-2 bg-black text-green-600 border-green-500 border-2 rounded-lg font-medium cursor-pointer hover:bg-green-500 hover:text-black transition">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
