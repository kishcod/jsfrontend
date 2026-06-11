export default function PaymentTable({
  payments
}) {
  return (
    <table className="table">

      <thead>
        <tr>
          <th>Phone</th>
          <th>Package</th>
          <th>Amount</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        {payments.map((p) => (
          <tr key={p.id}>
            <td>{p.phone}</td>
            <td>{p.package_name}</td>
            <td>KES {p.amount}</td>
            <td>{p.status}</td>
          </tr>
        ))}

      </tbody>

    </table>
  );
}
