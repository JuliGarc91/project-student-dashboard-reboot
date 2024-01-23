// Importing necessary React and react-router-dom components
import React from 'react'
import { Link } from 'react-router-dom'

// Importing the CSS file for styling
import "./Header.css"

// Creating a functional component named Header
const Header = () => {
  return (
    // Using a header tag to define a header for a document or a section
    <header>
      {/* Heading for the header, setting the class for styling */}
      <h1 className="title">Student Dashboard</h1>
        {/* Link component from react-router-dom for navigation without page refresh */}
        {/* Link to the home route */}
        <Link to={"/"} className='home'>Home </Link>
        {/* Link to the about route */}
        <Link to={"/about"} className='about'>About</Link>
    </header>
  )
}

// Exporting the Header component for use in other parts of the application
export default Header
