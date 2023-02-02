import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../context/auth.context"
import {useContext} from 'react';
import { Link } from 'react-router-dom';
 
function EditConcert(props) {
  const { concert, removeToken, storeToken, setUser} = useContext(AuthContext);
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


  const { concertId } = useParams();  
  
  const navigate = useNavigate()
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem('authToken');

    const updatedConcert = {title, image, description, country, city, street, houseNumber, postalCode}
    axios.put(`${process.env.REACT_APP_API_URL}/api/concerts/${concertId}`, updatedConcert,{ headers: { Authorization: `Bearer ${storedToken}`}} )
        .then(async (response) => {
          const authToken = response.data.authToken;
          const updatedUser = response.data.updatedUser;
          await removeToken()
          await storeToken(authToken)
          await setUser(updatedUser)
        navigate(`/concerts/`)
      })
        .catch(err => console.log(err))
  }

  const deleteConcert = () => {   
    const storedToken = localStorage.getItem('authToken');                 
    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/concerts/${concertId}`,{ headers: { Authorization: `Bearer ${storedToken}`}})
      .then(async (response) => {
        const authToken = response.data.authToken;
        const updatedUser = response.data.updatedUser;
        await removeToken()
        await storeToken(authToken)
        await setUser(updatedUser)
      navigate(`/concerts/`)
    })
      // .then(() => {
      //   navigate("/concerts");
      // })
      .catch((err) => console.log(err));
  };  

   useEffect(() => {  
    const storedToken = localStorage.getItem('authToken');                                // <== ADD
     axios
       .get(`${process.env.REACT_APP_API_URL}/api/concerts/${concertId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
       .then((response) => {

         const oneConcert = response.data;
         setTitle(oneConcert.title);
         setImage(oneConcert.image);
         setDescription(oneConcert.description);
         setCountry(oneConcert.country);
         setCity(oneConcert.city);
         setStreet(oneConcert.street);
         setHouseNumber(oneConcert.houseNumber);
         setPostalCode(oneConcert.postalCode);
         

       })
       .catch((error) => console.log(error));
     
   }, [concertId]);
  
  return (
    <div className="EditConcert">
      <h3>Edit the Concert</h3>
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

                {concert && concert.image && <img src={concert.image} alt={"concert_image"} style={{width: '300', height: '300px'}} />}
                {/* <form onSubmit={handleSubmit}> */}
                <input type="file" onChange={(e) => handleFileUpload(e)} name="image" className="form-control" placeholder='Image'/>
                {/* </form> */}
                <br/>

            <div>
                { image !== "" && <input className="btn btn-info text-light" type="submit" value="Submit" />}
            </div>
            <br/>
            <Link to="/concerts"><button className="btn btn-info text-light">Back to concerts</button></Link>
            </form>
            <br/>
            <p>Or</p>

      <button className="btn btn-info text-light" onClick={deleteConcert}>Delete Concert</button>
    </div>
  );
}
 
export default EditConcert;