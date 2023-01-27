import {useState} from 'react';
// import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function NewConcert() {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    // const [address, setAddress] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [street, setStreet] = useState("");
    

    const handleSubmit =  (e) => {
        e.preventDefault();
        const storedToken = localStorage.getItem('authToken');
        const addConcert = {
            title, description,
            country, city, postalCode, street
        }
        axios
        .post(`${process.env.REACT_APP_API_URL}/api/addconcert`, addConcert, { headers: { Authorization: `Bearer ${storedToken}`}})
        .then(() => {
            setTitle(''); setDescription('');  setCountry(''); setCity(''); setPostalCode(''); setStreet('');
          navigate("/beers");
        });
    };

    return (  
    <div>
        {/* <Navbar /> */}
        <div className='container mt-3'>
            <h2>Add New Concert</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                <label>Title</label>
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} name="title" className="form-control" placeholder="Title"/>
                </div>
                <div className="form-floating mb-3">
                <label>Description</label>
                    <input type="text" value={description} onChange={(e)=> setDescription(e.target.value)} name="description" className="form-control" placeholder="Description"/>
                </div>
                {/* <div className="form-floating mb-3">
                <label>Address</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} name="address" className="form-control" placeholder="Address"/> */}
                {/* </div> */}
                <div className="form-floating mb-3">
                <label>Country</label>
                    <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} name="country" className="form-control" placeholder="Country"/>
                </div>
                <div className="form-floating mb-3">
                <label>City</label>
                    <input type="text" value={city} onChange={(e) => setCity(e.target.value)} name="city" className="form-control" placeholder="City"/>
                </div>
                <div className="form-floating mb-3">
                <label>PostalCode</label>
                    <input type="text" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} name="postal_code" className="form-control" placeholder="Postal code"/>
                </div>
                <div className="form-floating mb-3">
                <label>Street</label>
                    <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} name="street" className="form-control" placeholder="Street"/>
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