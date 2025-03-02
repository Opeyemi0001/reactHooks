import React, { useCallback, useState } from 'react'
import Header from './Header';

function UseCallbackhook() {

  const [count, setCount] = useState(0); // State to store the count value

  // useCallback hook to memoize the newFn function
  const newFn = useCallback(() => { }, []);

  return (
    <>
      {/* Passing the memoized function to the Header component */}
      <Header newFn={newFn} />
      <h1>{count}</h1>
      {/* Button to increment the count */}
      <button onClick={() => { setCount(prev => prev + 1) }}>Click Here</button>
    </>
  )
}

export default UseCallbackhook