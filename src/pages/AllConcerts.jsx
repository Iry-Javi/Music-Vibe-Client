// import Navbar from '../components/Navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function AllConcerts() {
const [concerts, setConcerts] = useState([]);

const getAllListConcerts = () => {
    const storedToken = localStorage.getItem('authToken')


    axios.get(`${process.env.REACT_APP_API_URL}/api/concerts`, { headers: { Authorization: `Bearer ${storedToken}`}})
    .then((response) => setConcerts(response.data));
    // .catch((error) => console.log(error));
}
useEffect(() => {
    getAllListConcerts();
}, [] );

return (
<div>
{/* <Navbar /> */}
    {concerts.map((concert) => {

        return(
            <div className="col" key={concert._id}>
            <img src={concert.image_url} className="img-fluid rounded-start" alt="..." style={{objectFit: 'scale-down', width: '150px', height: '150px'}}/>
                <Link to={`/concerts/${concert._id}`}>Title: {concert.title}</Link>
            {/* <p className="card-text">Tagline: {concert.t}</p> */}
            {/* <p className="card-text">Contrubuted By: <small className="text-muted">{concert.contributed_by}</small></p> */}
        </div>
     )
    })}
</div>
)
}

export default AllConcerts