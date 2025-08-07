import React, { useState } from "react";
import { genTicket, sum } from "./helper";
import "./Lottery.css";
const Lottery = () => {
  const [ticket, setTicket] = useState(genTicket(3));
  const isWinner = sum(ticket) === 15;

  return (
    <div>
      <h1>Lottery</h1>
      <div className="ticket">
        <span>{ticket[0]}</span>
        <span>{ticket[1]}</span>
        <span>{ticket[2]}</span>
      </div>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Gen New Ticket
      </button>
      {isWinner && <h2>Congratulation, you won!</h2>}
    </div>
  );
};

export default Lottery;
