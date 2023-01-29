import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
 
function EditConcert(props) {
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [postalCode, setPostalCode] = useState("");


  const { concertId } = useParams();  
  
  const navigate = useNavigate()
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedToken = localStorage.getItem('authToken');

    const updatedConcert = {title, imageUrl, description, country, city, street, houseNumber, postalCode}
    axios.put(`${process.env.REACT_APP_API_URL}/api/concerts/${concertId}`, updatedConcert, { headers: { Authorization: `Bearer ${storedToken}` } })
        .then(() => navigate(`/concerts/${concertId}`))
        .catch(err => console.log(err))

  }

  const deleteConcert = () => {                    
    const storedToken = localStorage.getItem('authToken');

    axios
      .delete(`${process.env.REACT_APP_API_URL}/api/concerts/${concertId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then(() => {
        navigate("/concerts");
      })
      .catch((err) => console.log(err));
  };  

   useEffect(() => {  
    const storedToken = localStorage.getItem('authToken');                                // <== ADD
     axios
       .get(`${process.env.REACT_APP_API_URL}/api/concerts/${concertId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
       .then((response) => {

         const oneConcert = response.data;
         setTitle(oneConcert.title);
         setImageUrl(oneConcert.imageUrl);
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
            <div className="form-floating mb-3">
            <label>Title</label>
                <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} name="title" className="form-control" placeholder="Title"/>
            </div>
            <div className="form-floating mb-3">
            <label>Image</label>
                <input type="text" value={imageUrl} onChange={(e)=> setImageUrl(e.target.value)} name="image_Url" className="form-control" placeholder="Image"/>
            </div>
            <div className="form-floating mb-3">
            <label>Description</label>
                <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} name="description" className="form-control" placeholder="Description"/>
            </div>
            <div className="form-floating mb-3">
            <label>Country</label>
                <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} name="country" className="form-control" placeholder="Country"/>
            </div>
            <div className="form-floating mb-3">
            <label>City</label>
                <input type="text" value={city} onChange={(e) => setCity(e.target.value)} name="city" className="form-control" placeholder="City"/>
            </div>
            <div className="form-floating mb-3">
            <label>Street</label>
                <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} name="street" className="form-control" placeholder="Street"/>
            </div>
            <div className="form-floating mb-3">
            <label>House number</label>
                <input type="text" value={houseNumber} onChange={(e) => setHouseNumber(e.target.value)} name="house_number" className="form-control" placeholder="House number"/>
            </div>
            <div className="form-floating mb-3">
            <label>PostalCode</label>
                <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} name="postal_code" className="form-control" placeholder="Postal code"/>
            </div>

            <div>
                <button type="submit" className="btn btn-info text-light">Edit Concert</button>
            </div>
            </form>

      <button onClick={deleteConcert}>Delete Concert</button>
    </div>
  );
}
 
export default EditConcert;