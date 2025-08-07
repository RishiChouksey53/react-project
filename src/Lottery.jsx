import React, { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
const Lottery = ({ n = 3, winningSum = 15 }) => {
  const [ticket, setTicket] = useState(genTicket(n));
  const isWinner = sum(ticket) === winningSum;
  const buyTicket = () => {
    setTicket(genTicket(n));
  };
  return (
    <div>
      <h1>Lottery</h1>
      <Ticket ticket={ticket} />
      <button onClick={buyTicket}>Gen New Ticket</button>
      {isWinner && <h2>Congratulation, you won!</h2>}
    </div>
  );
};

export default Lottery;
