import React, { useEffect, useState } from "react";

const LudoBoard = () => {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });
  const [enable, setEnable] = useState({
    blue: false,
    yellow: true,
    red: true,
    green: true,
  });
  const [winner, setWinner] = useState("");
  const handleMoves = (color, nextClr) => {
    setEnable((prev) => ({ ...prev, [color]: true, [nextClr]: false }));
    const num = Math.floor(Math.random() * 6 + 1);
    if (moves[color] + num <= 25) {
      setMoves((prev) => ({ ...prev, [color]: prev[color] + num }));
    }
    if (moves[color] + num == 25) {
      setWinner(color.toUpperCase());
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  };

  return (
    <div>
      {winner ? (
        <h1>Congrats {winner} wins!</h1>
      ) : (
        <>
          <div>
            <h3>📜 Game Rules:</h3>
            <ul style={{ textAlign: "start" }}>
              <li>On click, a dice is rolled (random number 1 to 6).</li>
              <li>If dice + previous score = 25 → player wins.</li>
              <li>If dice + previous score &gt; 25 → no score update.</li>
            </ul>
          </div>
          <hr />
          <div>
            <p>Blue moves = {moves.blue}</p>
            <button
              disabled={enable.blue}
              style={!enable.blue ? { backgroundColor: "blue" } : {}}
              onClick={() => {
                handleMoves("blue", "yellow");
              }}
            >
              blue
            </button>
            <p>Yellow moves = {moves.yellow} </p>
            <button
              disabled={enable.yellow}
              style={
                !enable.yellow
                  ? { backgroundColor: "yellow", color: "black" }
                  : {}
              }
              onClick={() => {
                handleMoves("yellow", "red");
              }}
            >
              yellow
            </button>
            <p>Red moves = {moves.red} </p>
            <button
              disabled={enable.red}
              style={!enable.red ? { backgroundColor: "red" } : {}}
              onClick={() => {
                handleMoves("red", "green");
              }}
            >
              red
            </button>
            <p>Green moves = {moves.green} </p>
            <button
              disabled={enable.green}
              style={!enable.green ? { backgroundColor: "green" } : {}}
              onClick={() => {
                handleMoves("green", "blue");
              }}
            >
              green
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default LudoBoard;
