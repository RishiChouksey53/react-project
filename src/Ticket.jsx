import React from "react";
import TicketNum from "./TicketNum";
import "./Ticket.css";

const Ticket = ({ ticket }) => {
  return (
    <>
      <p>Ticket</p>
      <div className="ticket">
        {ticket.map((num, idx) => (
          <TicketNum key={idx} num={num} />
        ))}
      </div>
    </>
  );
};

export default Ticket;
