import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [advice, setAdvice] = useState("");

  const fetchData = () => {
    setAdvice("Writing Advice Wait ...");
    axios.get("https://api.adviceslip.com/advice").then((res) => {
      setAdvice(res.data.slip.advice);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchData}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
