// Project Name: Countdown Timer with LocalStorage
// Create a React component that implements a countdown timer.

// The user can input the initial time (in seconds) through a text input field (e.g., 10 seconds).
// When the user clicks the "Start" button, the countdown begins.
// The timer should decrease by 1 second at each tick.
// When the time reaches 0, display the message: "Time's up!".
// The user should be able to stop the timer using a "Stop" button.
// If the user refreshes the page, the timer should save its state (how much time is left) in localStorage and continue from where it left off.
// Add a "Reset" button to reset the timer to the initial input value (the time set by the user).

// Key Concepts to Use:
// useState to store the remaining time and timer state (running or stopped).
// useEffect to update the time every second when the timer is running.
// Store the timer state in localStorage to retain it across page reloads.
// Clear the interval using clearInterval when the timer stops or the component unmounts.

// Example Flow:
// The user enters "10" (seconds) into the input field.
// Clicks the "Start" button.
// The countdown begins, displaying the remaining time.
// When the timer hits 0, it shows "Time's up!".
// If the user refreshes the page, the timer will continue from where it left off.


import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(0);
  const [initialTime, setInitialTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const savedTime = localStorage.getItem("time");
    const savedIsRunning = localStorage.getItem("isRunning") === "true";

    if (savedTime) {
      setTime(parseInt(savedTime));
      setInitialTime(parseInt(savedTime));
    }
    if (savedIsRunning) {
      setIsRunning(true);
    }
  }, []);

  useEffect(() => {
    if (isRunning && time > 0) {
      const id = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
    }

    localStorage.setItem("time", time);
    localStorage.setItem("isRunning", isRunning.toString());

    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(intervalId);
  };

  const resetTimer = () => {
    setTime(initialTime);
    setIsRunning(false);
    clearInterval(intervalId);
  };

  return (
    <main>
      <h1>Timer</h1>
      <input
        type="number"
        value={initialTime}
        name="number"
        onChange={(e) => setInitialTime(Number(e.target.value))}
        disabled={isRunning}
        required
      />
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Restart</button>
      </div>
      <p>This is the Timer component. It will handle the timer functionality!</p>
    </main>
  );
};

export default Timer;