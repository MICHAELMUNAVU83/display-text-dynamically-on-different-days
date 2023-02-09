import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const date = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const [currentDay, setCurrentDay] = useState("");
  useEffect(() => {
    setCurrentDay(weekday[date.getDay()]);
  }, [currentDay]);
  const messages = [
    {
      text: "It is Sunday morning",
      day: "Sunday",
    },
    {
      text: "It is Monday morning",
      day: "Monday",
    },
    {
      text: "It is Tuesday morning",
      day: "Tuesday",
    },
    {
      text: "It is Wednesday morning",
      day: "Wednesday",
    },
    {
      text: "It is Thursday morning",
      day: "Thursday",
    },
    {
      text: "It is Friday morning",
      day: "Friday",
    },
    {
      text: "It is Saturday morning",
      day: "Saturday",
    },
  ];

  return (
    <div className="App">
      {messages.map(
        (message) =>
          currentDay === message.day && (
            <div>
              <h1>{message.text}</h1>
              <h2>{message.day}</h2>
            </div>
          )
      )}
    </div>
  );
}

export default App;
