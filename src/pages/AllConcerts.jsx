import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AllConcerts() {
const [concerts, setConcerts] = useState([]);

const getAllListConcerts = () => {
    const storedToken = localStorage.getItem('authToken')

    axios
    .get(`${process.env.REACT_APP_API_URL}/api/concerts`, { headers: { Authorization: `Bearer ${storedToken}`}})
    .then((response) => {
    setConcerts(response.data);
    })
}

useEffect(() => {
    getAllListConcerts();
}, [] );

return (
    <div>
    {concerts.map((concert) => {
        return(
            
            <div className="col" key={concert._id}>
            <div className="card mb-3 p-2 h-100" style={{maxWidth: '540px'}}>
            <div className="row g-0"></div>
            <div className="col-md-4"></div>
            <img src={concert.image} className="img-fluid rounded-start" alt="..." style={{objectFit: 'scale-down', width: '200px', height: '200px'}}/>
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">
                <Link to={`/singleconcert/${concert._id}`}>Title: {concert.title}</Link>
                </h5>
            </div>
            </div>
            </div>
        )
    })} 
    </div>

  )
  
}

export default AllConcerts