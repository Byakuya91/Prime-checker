import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  // TODO: core functions
  // 1Create clear for CSS and basic styles(DONE)
  // 2.Create HTML skeleton for prime checker(DONE)
  // 3. Create state variables to hold the user input(ONGOING)
  // 4. Create a function to check if the number is prime(DONE)
  // 5. Display the result in the U(DONE)

  // TODO: extra features
  // 1. Create a function to show all the prime numbers up to N(DONE)
  // 2. Styling: Color Code Prime or Not(ONGOING)

  // ? pieces of state
  //Numbers for input
  const [number, setNumber] = useState("");
  // sets the result for the numbers
  const [result, setResult] = useState("");
  // controls the list of primes up to for the list
  const [primeList, setPrimeList] = useState([]);
  // checks if a number is prime or not.
  const [isPrime, setIsPrime] = useState(null); // true, false, or null for checking if a number is prime or not.
  //  checks if there is an error when entering
  const [hasError, setHasError] = useState(false);
  // ?Functions

  console.log("The primeslist is:", primeList);

  // ?Core functions

  // ! creating a new check Prime
  // const checkPrime = () => {
  //   // ! defensive measure against trailing inputs
  //   let trimmedInput = number.trim();
  //   let num = parseInt(trimmedInput);

  //   // convert the string to a number.
  //   // console.log("the num after conversion is:", num);

  //   // edge cases
  //   // ? if it is not a number
  //   if (isNaN(num)) {
  //     setResult("Please, enter a number!");
  //     return;
  //   }
  //   // if it is not a prime number
  //   if (num < 2) {
  //     setResult("it is not a Prime Number!");
  //     return false;
  //   }

  //   // create a flag to check for IsPrime is true with some kind of loop.

  //   let isPrime = true;

  //   // for loop to check if the number is prime
  //   for (let i = 2; i < +Math.sqrt(num); i++) {
  //     if (num % i === 0) {
  //       // console.log("the num during the conditional check is:", num);
  //       isPrime = false;
  //       break;
  //     }
  //   }
  //   // update the result
  //   setResult(isPrime ? "It is a Prime Number!" : "It is not a Prime Number!");
  //   return isPrime;
  // };

  // ?Checking if a number is prime or not, taking in a number.

  const checkPrime = (num) => {
    // ?Checking if the number isn't prime or not
    if (num < 2) {
      return false;
    }
    // ?Checking if the number is prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const clearInput = () => {
    setNumber("");
    setResult("");
    setPrimeList("");
    setHasError(false);
  };

  // ? Extra features functions
  // create a function to show all the prime numbers up to N

  const listPrimesUpToN = () => {
    //  create an array to hold the prime numbers, STEP ONE.
    let num = parseInt(number);
    let primes = [];
    console.log("the primes list is:", primes);
    console.log("the number is:", num);

    if (isNaN(num) || num < 2) {
      setResult("Please enter a valid number greater than 1.");
      setPrimeList([]); // Clear the prime list to avoid null errors
      setHasError(true);
      return;
    }

    // loop through the numbers from 2 to N
    for (let i = 2; i <= num; i++) {
      if (checkPrime(i)) {
        console.log("the primes list before being added:", primes);
        primes.push(i); // add the prime number to the array.
      }
    }

    // set the state with the list of primes
    setPrimeList(primes);
    console.log("the primes list after being added:", primes);
  };

  // ? HANDLER FUNCTIONS
  const handleCheckPrime = () => {
    //  ? modify and convert the input
    const trimmedInput = number.trim();
    const num = parseInt(trimmedInput);

    //  ? check if  the input is valid
    if (isNaN(num)) {
      setResult("Please, enter a valid number!");
      setHasError(true);
      setIsPrime(null);
      return;
    }
    // ? Run our checking is prime or not function
    const primeCheck = checkPrime(num);
    //  ? set isPrime true or false
    setIsPrime(primeCheck);

    setResult(
      primeCheck ? "It is a Prime Number!" : "It is not a Prime Number!"
    );
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
              className={`input-field ${hasError ? "input-error shake" : ""}`}
              placeholder="Please, enter a number."
              onAnimationEnd={() => setHasError(false)} // resets the shake
            />
          </div>
          <div className="button-group">
            <button className="check-btn" onClick={handleCheckPrime}>
              Check
            </button>
            <button className="clear-btn" onClick={clearInput}>
              Clear
            </button>
            <button className="list-btn" onClick={listPrimesUpToN}>
              Show Primes Up to N
            </button>
          </div>
          <div className="result-container">
            <p
              className={
                isPrime === null
                  ? ""
                  : isPrime
                  ? "result-prime"
                  : "result-not-prime"
              }
            >
              {result}
            </p>
            {primeList.length > 0 && (
              <p>
                Prime Numbers up to {number} are:{" "}
                {primeList.map((num, index) => (
                  <span
                    key={index}
                    className={
                      checkPrime(num) ? "result-prime" : "result-not-prime"
                    }
                  >
                    {num}
                    {index < primeList.length - 1 && ", "}
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
