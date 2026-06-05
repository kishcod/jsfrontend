import "../styles/main.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nav = useNavigate();

  return (
    <div className="page">

      <h1 className="title">⚡ Josma WiFi</h1>
      <p className="subtitle">Fast. Secure. Affordable Internet</p>

      <button
        className="btn btn-primary"
        onClick={() => nav("/packages")}
      >
        Get Internet Access
      </button>

    </div>
  );
}