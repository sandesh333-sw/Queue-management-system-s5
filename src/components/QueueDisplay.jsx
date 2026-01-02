function QueueDisplay({queue, onUpdateStatus, onRemove}) {
  return (
    <div className="queue-display">
        <h2>Current queue</h2>
        {queue.length === 0 ? <p>No customer data</p>: <p>Yes customer data</p>}
    </div>
  )
}

export default QueueDisplay