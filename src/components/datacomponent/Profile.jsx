import React, { useContext } from 'react'
import Contact from './Contact'
import Footer from './Footer'
import { AppContext } from '../../context/AppContext'

const Profile = () => {

  const { name, phone } = useContext(AppContext);

  return (
    <div>
      <h2>Profile</h2>
      <h3>name: {name}</h3>
      <h4>phone: {phone}</h4>
      <Contact />

    </div>
  )
}

export default Profile