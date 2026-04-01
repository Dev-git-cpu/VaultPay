import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

    const API_URL = import.meta.env.VITE_API_URL;


const ProfilePage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {

      const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

      try {
        const res = await axios.get(
          `${API_URL}/api/users/profile`,
          {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
        );

        setUser(res.data);

      } catch (err) {
        console.log(err);

        // 🔐 Token expired / invalid / forbidden
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.clear();
          navigate("/login");
        }

      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  if (loading) return <div className="text-white p-10">Loading...</div>;
  if (!user) return <div className="text-red-400 p-10">Failed to load profile</div>;

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      <nav className="flex items-center justify-between px-10 py-6 border-b border-emerald-500/20">
        <h1 className="text-2xl font-bold text-emerald-500 tracking-wide">
          VaultPay
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="text-gray-300 hover:text-emerald-400 transition"
        >
          Back
        </button>
      </nav>

      <div className="px-8 md:px-16 py-12 flex justify-center">

        <div className="w-full max-w-2xl bg-[#111] rounded-2xl p-10 border border-emerald-500/10 relative overflow-hidden">

          <div className="absolute inset-0 bg-emerald-500/10 blur-3xl -z-10"></div>

          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-emerald-500/20 flex items-center justify-center text-3xl font-bold text-emerald-400">
              {user.name?.charAt(0)}
            </div>

            <h2 className="mt-4 text-2xl font-bold">
              {user.name}
            </h2>

            <p className="text-gray-400">@{user.username}</p>
          </div>

          <div className="mt-10 space-y-6">

            <div className="flex justify-between border-b border-emerald-500/10 pb-3">
              <span className="text-gray-400">Email</span>
              <span>{user.email}</span>
            </div>

            <div className="flex justify-between border-b border-emerald-500/10 pb-3">
              <span className="text-gray-400">User ID</span>
              <span>#{user.userId}</span>
            </div>

            <div className="flex justify-between border-b border-emerald-500/10 pb-3">
              <span className="text-gray-400">Joined</span>
              <span>
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "—"}
              </span>
            </div>

          </div>

          <button className="mt-10 w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 rounded-xl">
            Edit Profile
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProfilePage;