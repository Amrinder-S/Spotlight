import React , {useState, useEffect} from 'react'
import NavbarSpecific from '../Components/Navbar/NavbarSpecific'
import Dialogue from '../Components/Alerts/Dialogue';


const Profile = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function handleReject(){
    alert("Handle rejection")  
    // setMessage({
    //   ...message,
    //   display : "hidden"
    // })
  }

  function handleApprove(){
    alert("Handle Approval")
    // setMessage({
    //   ...message,
    //   display : "hidden"
    // })
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/get/students');
        console.log(data)
        setData(response.data);
      } 
      catch (error) {
        setError(error);
      } 
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      
      <NavbarSpecific
        backmessage={"Log Out"}
        pagename={`Welcome  Guest`}
      />

      {data.rows.map(({item}) => 
        <Dialogue 
          alertmessage = {item.name} 
          btnclose = {handleReject}
          btnaccept = {handleApprove}
        />
      )}

    </>
  )
}

export default Profile
