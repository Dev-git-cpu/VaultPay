import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 md:px-10 py-5 md:py-6 border-b border-emerald-500/20">
        <h1 className="text-xl md:text-2xl font-bold text-emerald-500 tracking-wide">
          VaultPay
        </h1>

        <div className="flex items-center gap-4 md:gap-6">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-300 hover:text-emerald-400 transition text-sm md:text-base"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/signup")}
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-4 md:px-5 py-2 rounded-xl transition shadow-lg shadow-emerald-500/20 text-sm md:text-base"
          >
            Register
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

        <div className="absolute w-72 h-72 md:w-125 md:h-125 bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>

        <h2 className="text-3xl md:text-7xl font-extrabold leading-tight mt-20 md:mt-50">
          Secure. Fast. Smart Payments.
        </h2>

        <p className="mt-6 max-w-2xl text-gray-400 text-base md:text-xl leading-relaxed">
          Experience the future of financial transactions with industry-leading
          security, lightning-fast transfers, and intelligent money management
          all in one platform.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button
            onClick={() => navigate("/signup")}
            className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 md:px-8 py-3 md:py-4 rounded-2xl transition duration-300 shadow-xl shadow-emerald-500/20 hover:scale-105"
          >
            Get Started →
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-6 md:px-8 py-3 md:py-4 rounded-2xl border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 transition duration-300"
          >
            Login
          </button>
        </div>
      </section>

      {/* NAVIGATION PILLS */}
      <div className="flex justify-center pb-10 mt-10 px-4">
        <div className="flex flex-wrap justify-center gap-4 bg-[#111] border border-emerald-500/20 px-6 py-3 rounded-full shadow-lg text-sm md:text-base">
          <span onClick={() => navigate("/")} className="text-emerald-400 font-medium cursor-pointer">Landing</span>
          <span onClick={() => navigate("/login")} className="text-gray-400 hover:text-white cursor-pointer">Login</span>
          <span onClick={() => navigate("/signup")} className="text-gray-400 hover:text-white cursor-pointer">Register</span>
          <span onClick={() => navigate("/dashboard")} className="text-gray-400 hover:text-white cursor-pointer">Dashboard</span>
          <span onClick={() => navigate("/transfer")} className="text-gray-400 hover:text-white cursor-pointer">Transfer</span>
        </div>
      </div>

      {/* FEATURES */}
      <section className="px-6 md:px-20 pb-20 md:pb-24 mt-16 md:mt-50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

          <div className="relative group rounded-2xl bg-[#111] p-6 md:p-8 border border-emerald-500/10 transition duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 text-xl font-bold">
              ⚡
            </div>

            <h3 className="mt-6 text-lg md:text-xl font-semibold">
              Instant Transfers
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
              Transfer money in seconds with our lightning-fast transaction
              processing technology.
            </p>
          </div>

          <div className="relative group rounded-2xl bg-[#111] p-6 md:p-8 border border-emerald-500/10 transition duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 text-xl font-bold">
              🛡
            </div>

            <h3 className="mt-6 text-lg md:text-xl font-semibold">
              Secure Transactions
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
              Bank-level encryption and multi-layer security protocols protect
              your money 24/7.
            </p>
          </div>

          <div className="relative group rounded-2xl bg-[#111] p-6 md:p-8 border border-emerald-500/10 transition duration-300 hover:scale-[1.02]">
            <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 text-xl font-bold">
              📈
            </div>

            <h3 className="mt-6 text-lg md:text-xl font-semibold">
              Real-time Balance
            </h3>

            <p className="mt-4 text-gray-400 leading-relaxed text-sm md:text-base">
              Monitor your wallet and transactions in real-time with detailed
              analytics and insights.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-emerald-500/20 bg-[#0f0f0f]">

        <div className="py-10 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-emerald-500 tracking-wide">
            VaultPay
          </h2>

          <p className="text-gray-400 text-sm mt-3">
            Secure. Fast. Smart Payments.
          </p>
        </div>

        <div className="border-t border-emerald-500/10 py-6 text-center text-gray-500 text-xs md:text-sm">
          © {new Date().getFullYear()} VaultPay. All rights reserved.
        </div>

      </footer>

    </div>
  );
};

export default LandingPage;