import {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from "../context/auth.context"

function NewConcert() {
    const { concert, setUser, removeToken, storeToken } = useContext(AuthContext);
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const handleFileUpload = (e) => {
    const uploadData = new FormData();

        uploadData.append("image", e.target.files[0]);
        axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData)
          .then(response => {
            setImage(response.data.image);
          })
          .catch(err => console.log("Error while uploading the file: ", err));
      };
    
    const handleSubmit =  (e) => {
        e.preventDefault();
    
        const storedToken = localStorage.getItem('authToken');
        const addConcert = {
            title, image, description, country,
            city, street, postalCode, houseNumber,
        }

        axios
        .post(`${process.env.REACT_APP_API_URL}/api/concerts`, addConcert, { headers: { Authorization: `Bearer ${storedToken}`}})
        .then( async (response) => {
          const authToken = response.data.authToken;
          const updatedUser = response.data.updatedUser;
          await removeToken()
          await storeToken(authToken)
          await setUser(updatedUser)
          setTitle(''); setImage(''); setDescription(''); setCountry(''); setCity(''); setStreet(''); setHouseNumber(''); setPostalCode('');
          navigate("/concerts");
        });
    };

    return (  
    <div>
        <div className='container mt-3'>
          <h2>Add your Concert details</h2>
        <form onSubmit={handleSubmit}>

                <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} name="title" className="form-control" placeholder='Title'/>
                <br/>
                <textarea type="text" value={description} onChange={(e)=> setDescription(e.target.value)} name="description" className="form-control" placeholder='Description'></textarea>
                <br/>
                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} name="country" className="form-control" placeholder='Country'/>
                <br/>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} name="city" className="form-control" placeholder='City'/>
                <br/>
                <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} name="street" className="form-control" placeholder='Street'/>
                <br/>
                <input type="text" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} name="house_number" className="form-control" placeholder='House number'/>
                <br/>
                <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} name="postal_code" className="form-control" placeholder='Postal code'/>
                <br/>
                {concert && concert.image && <img src={concert.image} alt={"concert_image"} style={{width: '300px', height: '300px'}} />}
                <form onSubmit={handleSubmit}>
                <input type="file" onChange={(e) => handleFileUpload(e)} name="image" className="form-control" placeholder='Image'/>
                </form>
                <br/>
          <div>
            {image !== "" && <button type="submit" className="btn btn-info text-light">Add New Concert</button>}
          </div>
            </form>
        </div>    
    </div>
  )
  }


export default NewConcert