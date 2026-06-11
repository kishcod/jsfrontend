import { useState } from "react";
import API from "../services/api";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = async () => {
    try {

      setError("");

      const res = await API.post("/api/admin/login", {
        username,
        password
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);

        window.location = "/admin/dashboard";
      } else {
        setError("Invalid login credentials");
      }

    } catch (err) {
      setError(
        err.response?.data?.message || "Login failed"
      );
    }
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

        <button onClick={login}>
          Login
        </button>

      </div>

    </div>
  );
}
