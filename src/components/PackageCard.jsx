import PaymentModal from "./PaymentModal";

import "./PackageCard.css";

function PackageCard({ pkg }) {
  return (
    <div className="card">
      <h2>{pkg.name}</h2>

      <p>KES {pkg.price}</p>

      <PaymentModal pkg={pkg} />
    </div>
  );
}

export default PackageCard;