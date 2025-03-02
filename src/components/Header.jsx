import React from 'react'

// Header component
const Header = () => {
  console.log('Header rendered');

  return (
    <div>Header</div>
  )
}

// Exporting the Header component wrapped with React.memo to prevent unnecessary re-renders
export default React.memo(Header)