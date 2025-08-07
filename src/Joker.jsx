import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Joker.css";
const Joker = () => {
  const [joke, setJoke] = useState({});
  const [loading, setLoading] = useState(false);

  const URL = "https://official-joke-api.appspot.com/random_joke";
  const newJoke = async () => {
    try {
      setLoading(true);
      const response = await axios.get(URL);
      setJoke(() => ({
        setup: response.data.setup,
        punchline: response.data.punchline,
      }));
      console.log(setJoke);
    } catch (err) {
      console.err(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    newJoke();
  }, []);

  return (
    <div>
      <h2>Joker</h2>
      {loading ? (
        <div class="loader"></div>
      ) : (
        <>
          <h2>{joke.setup}</h2>
          <h2>{joke.punchline}</h2>
        </>
      )}
      <button onClick={newJoke}>New Joke</button>
    </div>
  );
};

export default Joker;
