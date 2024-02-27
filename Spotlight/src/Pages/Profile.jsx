import React from 'react'
import NavbarSpecific from '../Components/Navbar/NavbarSpecific'
import { useLocation } from 'react-router-dom';
const Profile = () => {
 const location = useLocation()
 const {user} = location.state

  return (
    <>
      
    <NavbarSpecific
    backmessage={"Log Out"}
    pagename={`Welcome  ${user.name}`}/>

    
    </>
  )
}

export default Profile