import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const navigate = useNavigate();

  const SignUpHandler = async (e) => {
    e.preventDefault();

    if (!name || !username || !email || !password) {
      alert("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/register",
        { name, username, email, password }
      );
      console.log(response.data);
localStorage.setItem("name",response.data.name)
localStorage.setItem("username",response.data.username)

      navigate('/dashboard')
    } catch (error) {
      console.log(error);
      alert("Signup failed")
    }
    
  };
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md bg-gray-950 rounded-2xl shadow-lg p-8 border hover:border-green-500">

        {/* Logo + Title */}
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-2">
            <img src="v.png" alt="VaultPay" className="h-10 w-10" />
            <span className="text-2xl font-semibold text-green-500 leading-none">
              VaultPay
            </span>
          </div>
        </div>

        <p className="text-white text-sm text-center mt-1">
          Create your VaultPay account
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">

          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-white">
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="mt-1 w-full px-4 py-2 text-white placeholder-gray-600 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-white">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              className="mt-1 w-full px-4 py-2 text-white placeholder-gray-600 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              className="mt-1 w-full px-4 py-2 text-white placeholder-gray-600 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 text-white placeholder-gray-600 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Button */}
          <button
            onClick={SignUpHandler}
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
            
          >
            Sign Up
          </button>
        </form>

        {/* Login link */}
        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <span onClick={()=>navigate("/login")} className="text-green-600 font-medium cursor-pointer hover:underline">
            Log in
          </span>
        </p>

      </div>
    </div>
  );
};

export default Signup;
 