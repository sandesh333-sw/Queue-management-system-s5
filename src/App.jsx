import { useState } from "react";
import "./App.css";
import QueueForm from "./components/QueueForm";

export default function App() {

  const [queue, setQueue] = useState([]);
  const addToQueue = (customer) => {
    //add data to queue
  }

  const updateStatus = (id, newStatus) => {
    //change data in queue
  }

  const removeFromQueue = (id) => {
    //remove data from queue
  }

  return (
    <div>
      <header>
        <h1>Queue Management</h1>
        <p>Manage your customers eficiently</p>
      </header>
      <main className="main-part">
        <section className="queue-form">
          <QueueForm 
          onAdd={addToQueue}
          />
        </section>

        <section className="queue-display">
          <h1>Queue Display</h1>
        </section>
      </main>

    </div>
  );
}
