import "../styles/main.css";
import { useEffect } from "react";

export default function Expired() {
  useEffect(() => {
    localStorage.removeItem("wifi_active");
  }, []);

  return (
    <div className="page">
      <h1 className="error">Session Expired</h1>
      <p>Please buy a package to continue browsing</p>
    </div>
  );
}