import React , {useState, useEffect} from 'react'
import NavbarSpecific from '../Components/Navbar/NavbarSpecific'
import Dialogue from '../Components/Alerts/Dialogue';
import Axios from 'axios';

const Profile = () => {
  
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

 

  

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get('http://localhost:8000/get/students');
        console.log(response.data.rows)

        setData(response.data.rows);
      } 
      catch (error) {
        setError(error);
      } 
      finally {
        setLoading(false);
      }
    }
    fetchData()
  },[])
  
 

  return (
    <>
      
      <NavbarSpecific
        backmessage={"Log Out"}
        pagename={`Welcome  Guest`}
      />
      <div className="alerts flex flex-col gap-4">
      {data.map((item) => 
        <Dialogue 
          alertmessage = {item.name} 
        />
      )}
      </div>

      {/* <button onClick={handleResponse}>Handle</button> */}

    </>
  )
}

export default Profile
