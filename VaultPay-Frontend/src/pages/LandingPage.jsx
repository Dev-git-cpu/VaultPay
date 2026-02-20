import { Navigate, useNavigate } from "react-router-dom";
const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white flex flex-col">
      
      <nav className="flex items-center justify-between px-10 py-6 border-b border-emerald-500/20">
        <h1 className="text-2xl font-bold text-emerald-500 tracking-wide">
          VaultPay
        </h1>

        <div className="flex items-center gap-6">
          <button onClick={()=>navigate('/login')} className="text-gray-300 hover:text-emerald-400 transition">
            Login
          </button>
          <button onClick={()=>navigate('/signup')} className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-5 py-2 rounded-xl transition shadow-lg shadow-emerald-500/20">
            Register
          </button>
        </div>
      </nav>

      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">

        <div className="absolute w-125 h-125 bg-emerald-500/10 rounded-full blur-[120px] -z-10"></div>

        <h2 className="text-4xl md:text-7xl font-extrabold leading-tight mt-50">
          Secure. Fast. Smart Payments.
        </h2>

        <p className="mt-6 max-w-2xl text-gray-400 text-lg md:text-xl leading-relaxed">
          Experience the future of financial transactions with industry-leading
          security, lightning-fast transfers, and intelligent money management
          all in one platform.
        </p>

        <div onClick={()=>navigate('/signup')} className="mt-10 flex flex-col sm:flex-row gap-6">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-8 py-4 rounded-2xl transition duration-300 shadow-xl shadow-emerald-500/20 hover:scale-105">
            Get Started →
          </button>

          <button onClick={()=>navigate('/login')} className="px-8 py-4 rounded-2xl border border-emerald-500 text-emerald-400 hover:bg-emerald-500/10 transition duration-300">
            Login
          </button>
        </div>
      </section>

      <div className="flex justify-center pb-12 mt-10">
        <div className="flex gap-6 bg-[#111] border border-emerald-500/20 px-8 py-4 rounded-full shadow-lg">
          <span onClick={()=>navigate('/')} className="text-emerald-400 font-medium">Landing</span>
          <span onClick={()=>navigate('/login')} className="text-gray-400 hover:text-white cursor-pointer">Login</span>
          <span onClick={()=>navigate('/signup')} className="text-gray-400 hover:text-white cursor-pointer">Register</span>
          <span onClick={()=>navigate('/dashboard')} className="text-gray-400 hover:text-white cursor-pointer">Dashboard</span>
          <span onClick={()=>navigate('/transfer')} className="text-gray-400 hover:text-white cursor-pointer">Transfer</span>
        </div>
      </div>

      
<section className="px-8 md:px-20 pb-24 mt-50">
  <div className="grid md:grid-cols-3 gap-8">

    <div className="relative group rounded-2xl bg-[#111] p-8 border border-emerald-500/10 transition duration-300 hover:scale-[1.02]">
      
      <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 text-xl font-bold">
        ⚡
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        Instant Transfers
      </h3>

      <p className="mt-4 text-gray-400 leading-relaxed">
        Transfer money in seconds with our lightning-fast transaction 
        processing technology.
      </p>
    </div>

    <div className="relative group rounded-2xl bg-[#111] p-8 border border-emerald-500/10 transition duration-300 hover:scale-[1.02]">
      
      <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 text-xl font-bold">
        🛡
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        Secure Transactions
      </h3>

      <p className="mt-4 text-gray-400 leading-relaxed">
        Bank-level encryption and multi-layer security protocols 
        protect your money 24/7.
      </p>
    </div>

    <div className="relative group rounded-2xl bg-[#111] p-8 border border-emerald-500/10 transition duration-300 hover:scale-[1.02]">
      
      <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition duration-500 -z-10"></div>

      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 text-xl font-bold">
        📈
      </div>

      <h3 className="mt-6 text-xl font-semibold">
        Real-time Balance
      </h3>

      <p className="mt-4 text-gray-400 leading-relaxed">
        Monitor your wallet and transactions in real-time with 
        detailed analytics and insights.
      </p>
    </div>

  </div>
</section>
<footer className="mt-20 border-t border-emerald-500/20 bg-[#0f0f0f]">

  <div className="py-10 text-center">
    <h2 className="text-2xl font-bold text-emerald-500 tracking-wide">
      VaultPay
    </h2>
    <p className="text-gray-400 text-sm mt-3">
      Secure. Fast. Smart Payments.
    </p>
  </div>

  <div className="border-t border-emerald-500/10 py-6 text-center text-gray-500 text-sm">
    © {new Date().getFullYear()} VaultPay. All rights reserved.
  </div>

</footer>




    </div>
  );
};

export default LandingPage;
