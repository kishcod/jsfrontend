import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import PaymentTable from "../components/PaymentTable";

export default function Payments() {

  const payments = [];

  return (
    <div className="layout">

      <Sidebar />

      <div className="content">

        <Navbar />

        <h2>Payments</h2>

        <PaymentTable
          payments={payments}
        />

      </div>

    </div>
  );
}
