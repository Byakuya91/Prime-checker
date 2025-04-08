import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // TODO:
  // 1Create clear for CSS and basic styles(DONE)
  // 2.Create HTML skeleton for prime checker(DONE)
  // 3. Create state variables to hold the user input(ONGOING)
  // 4. Create a function to check if the number is prime.
  // 5. Display the result in the U(DONE)

  // ? State variables for input and numbers
  const [number, setNumber] = useState("");

  // console logs
  console.log("the current number is:", number);

  const [result, setResult] = useState("");

  // ?Two functions: clear the input and check if it is prime

  const checkPrime = () => {
    // ! defensive measure against trailing inputs
    let trimmedInput = number.trim();
    let num = parseInt(trimmedInput);

    // convert the string to a number.
    console.log("the num after conversion is:", num);

    // edge cases
    // ? if it is not a number
    if (isNaN(num)) {
      setResult("Please, enter a number!");
      return;
    }
    // if it is not a prime number
    if (num < 2) {
      setResult("it is not a Prime Number!");
      return;
    }

    // create a flag to check for IsPrime is true with some kind of loop.

    let isPrime = true;

    // for loop to check if the number is prime
    for (let i = 2; i < +Math.sqrt(num); i++) {
      if (num % i === 0) {
        console.log("the num during the conditional check is:", num);
        isPrime = false;
        break;
      }
    }
    // update the result
    setResult(isPrime ? "It is a Prime Number!" : "It is not a Prime Number!");
  };
  const clearInput = () => {
    setNumber("");
    setResult("");
  };

  return (
    <>
      <div className="container">
        <div className="card">
          <h2>Prime Number Checker</h2>
          <div className="input-container">
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Please, enter a number."
            />
          </div>
          <div className="button-group">
            <button className="check-btn" onClick={checkPrime}>
              Check
            </button>
            <button className="clear-btn" onClick={clearInput}>
              Clear
            </button>
          </div>
          <p>{result}</p>
        </div>
      </div>
    </>
  );
}

export default App;
