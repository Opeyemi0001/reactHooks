import React, { useEffect, useState } from 'react' // Import useEffect and useState hooks from React

// Functional component to count how many times the component gets loaded
function UseEffecthook() {

  
  const [count, setCount] = useState(0); // Declare a state variable 'count' with initial value 0

  useEffect(() => {  // useEffect hook to update the count after 2 seconds
    setTimeout(() => {
      setCount(count => count + 1);
    }, 2000)
  }, []); // Empty dependency array means this effect runs only once after the initial render

  return (
    <>
      
      <h1>I've rendered {count} times! </h1> {/* Display the number of times the component has rendered */}
    </>
  )
}

export default UseEffecthook
