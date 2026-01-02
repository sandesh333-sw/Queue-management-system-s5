export default function QueueDisplay({ queue, onUpdateStatus, onRemove }) {
  return (
    <div className="queue-display">
      <h2>Current Queue</h2>

      {queue.length === 0 ? (
        <p>No customer data</p>
      ) : (
        queue.map(customer => (
          <div key={customer.id} className="customer-card">
            <h3>{customer.name}</h3>
            <p>Service: {customer.service}</p>
            <p>Status: {customer.status}</p>

            <button onClick={() => onUpdateStatus(customer.id, "serving")}>
              Serve
            </button>

            <button onClick={() => onRemove(customer.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
