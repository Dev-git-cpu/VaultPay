import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TailSpin } from "react-loader-spinner";

    const API_URL = import.meta.env.VITE_API_URL;


const Login = () => {
  

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoader] = useState(false)

  const navigate = useNavigate();

  const LoginHandler = async (e) => {
    e.preventDefault();

    setLoader(true)

    if (!identifier || !password) {
      toast.warning("All fields are required");
      return;
    }

console.log("API URL:", API_URL);
   
    try {
       
  const response = await axios.post(
    `${API_URL}/api/auth/login`,
    { identifier, password }
  );
  console.log("API URL:", API_URL);

  const data = response.data;
  console.log(data);

  localStorage.setItem("token", data.token);
  localStorage.setItem("userId", data.userId);
  localStorage.setItem("username", data.username);

  toast.success("Login Successful");
  navigate("/dashboard");

} catch (error) {
  const message = error.response?.data?.message || "Login failed";
  toast.error(message);
}
    setLoader(false)
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">

      <div className="relative w-full max-w-md">

        <div className="absolute inset-0 bg-emerald-500/20 blur-3xl rounded-3xl"></div>

        <div className="relative bg-[#0b0b0b] rounded-3xl p-10 border border-emerald-500/10 shadow-2xl">

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-emerald-500">VaultPay</h1>

            <h2 className="text-2xl font-semibold text-white mt-4">
              Welcome Back
            </h2>

            <p className="text-gray-400 mt-2">
              Access your secure wallet
            </p>
          </div>

          <form onSubmit={LoginHandler} className="space-y-6">

            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Username
              </label>
              <input
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                type="text"
                placeholder="username"
                className="w-full bg-[#111] border border-emerald-500/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none"
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
                className="w-full bg-[#111] border border-emerald-500/10 rounded-xl px-4 py-3 text-white focus:border-emerald-500 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 rounded-xl transition"
              
            >
              {loading ? (
            <TailSpin
              height="20"
              width="500"
              color="#000000"
              ariaLabel="loading"
            />
          ) : (
            "Login"
          )}
            </button>

            <p className="text-center text-gray-400 text-sm mt-6">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="text-emerald-500 cursor-pointer hover:underline"
              >
                Register
              </span>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;