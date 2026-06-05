import "../styles/main.css";
import { useEffect } from "react";

export default function Success() {
  useEffect(() => {
    localStorage.setItem("wifi_active", "true");
  }, []);

  return (
    <div className="page">
      <h1 className="success">Payment Successful 🎉</h1>
      <p>You now have internet access</p>
    </div>
  );
}