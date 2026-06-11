import { useState } from "react";
import API from "../services/api";

export default function Login() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const login = async () => {

    const res = await API.post(
      "/api/admin/login",
      {
        username,
        password
      }
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

    window.location="/dashboard";
  };

  return (
    <div className="login">

      <div className="login-card">

        <h2>Admin Login</h2>

        <input
          placeholder="Username"
          onChange={(e)=>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>
            setPassword(e.target.value)
          }
        />

        <button onClick={login}>
          Login
        </button>

      </div>

    </div>
  );
}
