// import { useState } from 'react' // Import the useState hook from React

// function UseStatehook() {

//   const [color, setColor] = useState("Red") // Declare a state variable 'color' with initial value "Red"

//   // Function to change the color state to "Blue"
//   const changeColor = () => {
//     setColor("Blue")
//   }

//   return (
//     <div>

//        <h1>My favourite color is {color}!</h1> {/* Display the current color */}
//        <button onClick={changeColor}>Blue</button>  {/* Button to change the color to Blue */}
//     </div>
//   )
// }

// export default UseStatehook

// The above code is a simple example of using the useState hook in React. The useState hook is used to add state to functional components in React. In the above code, we have a functional component called UseStatehook that uses the useState hook to manage a state variable called 'color'. The initial value of the color state is set to "Red". We also have a button that, when clicked, changes the color state to "Blue". The current value of the color state is displayed using an h1 element.



import { useState } from 'react' // Import the useState hook from React

function UseStatehook() {

  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "Red"
  }) // Declare a state variable 'car' with initial value of an object

  // Function to change the color state to "Blue"
  const changeColor = () => {

    setCar((prev) => {
      return {
        ...prev, color: "blue"
      }
    })
  }

  return (
    <div>
      <h1>My {car.brand}</h1>  {/* Display the current brand */}
      <h2>It is a {car.color} {car.model} from {car.year}</h2> {/* Display the current color, model and year */}
      <button onClick={changeColor} >Blue</button>  {/* Button to change the color to Blue */}
    </div>
  )
}

export default UseStatehook

// The above code is an example of using the useState hook to manage an object state in React. In this example, we have a state variable 'car' that is an object with properties brand, model, year, and color. The initial value of the car state is set to an object with the brand "Ford", model "Mustang", year "1964", and color "Red". We also have a button that, when clicked, changes the color property of the car state to "Blue". The current values of the brand, color, model, and year properties are displayed using h1 and h2 elements.



// import { useState } from 'react' // Import the useState hook from React

// function UseStatehook() {

//   const[count, setCount] = useState(0);

//   const increaseCount = () => {
//     setCount(count=> count + 1) 
//     setCount(count=> count + 1) 
//     setCount(count=> count + 1)
//   }

//   return (
//     <div>
//       <h1>Count:{count}</h1>
//       <button onClick={increaseCount} >Increase by 3</button>
//     </div>
//   )
// }

// export default UseStatehook