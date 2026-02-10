import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [identifier,setIdentifier] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate();
    const LoginHandler = async (e) =>{
        e.preventDefault()
        if(!identifier || !password){
            alert("All fields are required")
        }

        try {
            const response = await axios.post("http://localhost:8080/api/auth/login",{identifier,password})
            console.log(response);

            localStorage.setItem("name",response.data.name)
            localStorage.setItem("username",response.data.username)

            navigate('/dashboard')
            
            
        } catch (error) {
            console.log(error);
            
        }

    }
    
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-full max-w-md bg-gray-950 rounded-2xl shadow-lg p-8 border hover:border-green-500">
        
        {/* Title */}
      <div className="flex items-center justify-center">
  <div className="flex items-center gap-2">
    <img
      src="v.png"
      alt="VaultPay"
      className="h-10 w-10 object-contain"
    />
    <span className="text-2xl font-semibold text-green-500 leading-none flex items-center">
      VaultPay
    </span>
  </div>
</div>


        <p className="text-white text-sm text-center mt-1">
          Secure money transfers at your fingertips
        </p>

        {/* Form */}
        <form className="mt-6 space-y-4">
          {/* Username */}
          <div>
            <label  className="block text-sm font-medium text-white">
              Username or Email
            </label>
            <input value={identifier} onChange={(e)=>{setIdentifier(e.target.value)}}
              type="text"
              placeholder="username or email"
              className="mt-1 w-full px-4 py-2 text-white placeholder-gray-600 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-white">
              Password
            </label>
            <input value={password} onChange={(e)=>{setPassword(e.target.value)}}
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 text-white placeholder-gray-600  border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Button */}
          <button onClick={LoginHandler}
            type="submit"
            className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition"
          >
            Log In
          </button>
        </form>

        {/* Signup */}
        <p className="text-sm text-center text-gray-500 mt-4">
          No account?{" "}
          <span onClick={()=>navigate("/signup")} className="text-green-600 font-medium cursor-pointer hover:underline">
            Sign up
          </span>
        </p>

        
      </div>
    </div>
  );
};

export default Login;
