import React, { useMemo, useState } from 'react'

function UseMemohook() {

  const [number, setNumber] = useState(0); // State to store the input number
  const [counter, setCounter] = useState(0); // State to store the counter value

  // Function to calculate the cube of a number
  function cubeNum(num) {
    console.log('calculation done!');
    return Math.pow(num, 3);
  }

  // useMemo hook to memoize the result of cubeNum function
  const result = useMemo(() => cubeNum(number), [number]);

  return (
    <div>
      {/* Input field to update the number state */}
      <input type="number" value={number} onChange={(e) => { setNumber(e.target.value) }} />
      <h1>Cube of number: {result}</h1>
      {/* Button to increment the counter */}
      <button onClick={() => { setCounter(counter => counter + 1) }}>counter++</button>
      <h1>counter: {counter}</h1>
    </div>
  )
}

export default UseMemohook