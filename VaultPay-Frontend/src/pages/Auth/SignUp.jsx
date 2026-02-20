import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const SignUpHandler = async () => {

    if (!name || !username || !email || !password) {
      toast.warning("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        { name, username, email, password }
      );

      console.log(response.data);

      toast.success("Account created! Please login 🔐");
      navigate("/login");

    } catch (error) {
      console.log(error);

      const message =
        error.response?.data?.message || "Signup failed";

      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="relative w-full max-w-md m-10">

        <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-3xl"></div>

        <div className="relative bg-[#0b0b0b] rounded-3xl p-10 border border-emerald-500/10 shadow-2xl">

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-emerald-500">
              VaultPay
            </h1>

            <h2 className="text-2xl font-semibold text-white mt-4">
              Create Account
            </h2>

            <p className="text-gray-400 mt-2">
              Access your secure wallet
            </p>
          </div>

          <div className="space-y-6">

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Full Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Full name"
                className="w-full bg-[#111] border border-emerald-500/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Username
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="username"
                className="w-full bg-[#111] border border-emerald-500/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="email"
                className="w-full bg-[#111] border border-emerald-500/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full bg-[#111] border border-emerald-500/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500 transition"
              />
            </div>

            <button
              onClick={SignUpHandler}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 rounded-xl transition duration-300 shadow-lg shadow-emerald-500/30"
            >
              Register
            </button>

            <p className="text-center text-gray-400 text-sm mt-6">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/login")}
                className="text-emerald-500 cursor-pointer hover:underline"
              >
                Login
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
