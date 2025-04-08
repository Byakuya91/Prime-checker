import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // TODO:
  // 1Create clear for CSS and basic styles(ONGOING)
  // 2.Create HTML skeleton for prime checker
  // 3. Create state variables to hold the user input.
  // 4. Create a function to check if the number is prime.
  // 5. Display the result in the U(DONE)

  return (
    <>
      <div className="container">
        <div className="card">
          <h2>Prime Number Checker</h2>
          <div className="input-container">
            <input type="number" placeholder="Please, enter a number." />
          </div>
          <div className="button-group">
            <button className="check-btn">Check</button>
            <button className="clear-btn">Clear</button>
          </div>
          <p>It is a prime number!</p>
        </div>
      </div>
    </>
  );
}

export default App;
