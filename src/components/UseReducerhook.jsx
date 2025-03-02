import React, { useReducer } from 'react'

// Initial state for the reducer
const UseReducerhook = () => {

  const initialState = { count: 0 };

  // Reducer function to handle state changes based on action types
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increase': {
        return { count: state.count + 1 }
      }
      case 'decrease': {
        return { count: state.count - 1 }
      }
      case 'input': {
        return { count: action.payload }
      }
      default: {
        return state
      }
    }
  }

  // useReducer hook to manage state with the reducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1> {/* Button to dispatch increase action */}
      <button onClick={() => dispatch({ type: 'increase' })}>Increase</button> {/* Button to dispatch decrease action */}
      <button onClick={() => dispatch({ type: 'decrease' })}>Decrease</button>
      <br />
      {/* Input field to dispatch input action with the entered value */}
      <input type="number" value={state.count} onChange={(e) => dispatch({ type: 'input', payload: Number(e.target.value) })} />
    </>
  )
}

export default UseReducerhook