// import React, { useRef, useState } from 'react' // Import useRef and useState hook from React

// function UesRefHook() {
//   const [value, setValue] = useState(0); // Declare a state variable 'value' with initial value 0

//   const count = useRef(0); // useRef hook to keep track of the render count

//   // useEffect hook to update the render count on each render
//   useEffect(() => {
//     count.current = count.current + 1;
//   })

//   return (
//     <>
//       <button onClick={() => { setValue(prev => prev - 1) }} >-1</button> {/* Button to decrease the value by 1 */}
//       <h1>{value}</h1> {/* Display the current value */}
//       <button onClick={() => { setValue(prev => prev + 1) }}>+1</button> {/* Button to increase the value by 1 */}
//       <h1>Render Count:{count.current}</h1> {/* Display the render count */}
//     </>
//   )
// }

// // Export the UesRefHook component as the default export
// export default UesRefHook




// ueRef hook for accessing the DOM element 

import React, { useRef } from 'react' // Import useRef hook from React

function UesRefHook() {
  const inputElem = useRef(); // useRef hook to get a reference to the input element

  const btnClicked = () => {
    inputElem.current.style.background = "blue"; // Change the background color of the input element
  }

  return (
    <>
      <input type="text" ref={inputElem} /> {/* Attach the ref to the input element */}
      <button onClick={btnClicked}>Click Here</button> {/* Button to trigger the background color change */}
    </>
  )
}

// Export the UesRefHook component as the default export
export default UesRefHook



