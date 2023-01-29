import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewConcert() {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [postalCode, setPostalCode] = useState("");
    

    const handleSubmit =  (e) => {
        e.preventDefault();
        const storedToken = localStorage.getItem('authToken');
        const addConcert = {
            title, imageUrl, description, country,
            city, street, postalCode, houseNumber
        }
        console.log({addConcert})
        axios
        .post(`${process.env.REACT_APP_API_URL}/api/concerts`, addConcert, { headers: { Authorization: `Bearer ${storedToken}`}})
        .then(() => {
            setTitle(''); setImageUrl(''); setDescription(''); setCountry(''); setCity(''); setStreet(''); setHouseNumber(''); setPostalCode('');
          navigate("/concerts");
        });
    };

    return (  
    <div>
        <div className='container mt-3'>
          <h2>Add New Concert</h2>
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
                <button type="submit" className="btn btn-info text-light">Add New Concert</button>
            </div>
            </form>
        </div>     
    </div>
  )
  }


export default NewConcert