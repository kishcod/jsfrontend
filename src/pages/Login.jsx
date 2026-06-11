import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    try {

      setLoading(true);
      setError("");

      if (!username || !password) {
        setError("Please fill all fields");
        setLoading(false);
        return;
      }

      const res = await API.post("/api/admin/login", {
        username,
        password
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);

        navigate("/admin/dashboard");
      } else {
        setError("Invalid login credentials");
      }

    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed"
      );
    }

    setLoading(false);
  };

  return (
    <div className="login">

      <div className="login-card">

        <h2>Admin Login</h2>

        <input
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <p style={{ color: "red", fontSize: "12px" }}>
            {error}
          </p>
        )}

        <button onClick={login} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

      </div>

    </div>
  );
}
