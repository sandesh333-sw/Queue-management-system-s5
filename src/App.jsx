import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";
import QueueDisplay from "./components/QueueDisplay";


export default function App() {

  const [queue, setQueue] = useState([]);
  const addToQueue = (customer) => {
    //add data to queue
    setQueue([...queue, {...customer, id: Date.now(), status:'waiting'}]);
  }

  const updateStatus = (id, newStatus) => {
    //change data in queue
    setQueue(queue.map(customer => {
      customer.id === id ? {...customer, status: newStatus}: customer;
    }));
  }

  const removeFromQueue = (id) => {
    //remove data from queue
    setQueue(queue.filter(customer => customer.id !== id))
  };

  return (
    <div>
      <header className="head">
        <h1>Queue Management</h1>
      </header>
      <main className="main-part">
        <section className="queue-form">
          <QueueForm 
          onAdd={addToQueue}
          />
        </section>

        <section className="queue-display">
          <QueueDisplay 
          queue={queue}
          onUpdateStatus={updateStatus}
          onRemove={removeFromQueue}
          />
        </section>
      </main>

    </div>
  );
}
