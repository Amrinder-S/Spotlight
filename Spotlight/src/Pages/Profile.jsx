import React , {useState} from 'react'
import NavbarSpecific from '../Components/Navbar/NavbarSpecific'
// import { useLocation } from 'react-router-dom';
import Dialogue from '../Components/Alerts/Dialogue';
const Profile = () => {
//  const location = useLocation()
//  const {user} = location.state
 const [message,setMessage] = useState({
  display : "visible",
  message : "This is an alert",
})

 function handleReject(){
  alert("Handle rejection")  
  setMessage({
      ...message,
      display : "hidden"
    })
 }

 function handleApprove(){
  alert("Handle Approval")
  setMessage({
    ...message,
    display : "hidden"
  })
 }
  return (
    <>
      
    <NavbarSpecific
    backmessage={"Log Out"}
    pagename={`Welcome  Guest`}/>

    <Dialogue 
      alertmessage = {message.message}
      btnclose = {handleReject}
      btnaccept = {handleApprove}
      visibility = {message.display}
    />

    
    </>
  )
}

export default Profile