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
        <div className="row row-cols-1 row-cols-md-4 g-3 m-3 bg-black">
        {concerts.map((concert) => {
            return(
                    <div className="col" key={concert._id}>
                    <div className="card mb-3 p-5 h-100 bg-dark" style={{maxWidth: '540px'}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                            <img src={concert.image} className="text-center" alt="..."   style={{objectFit: 'scale-down', width: '200px', height: '200px'}}/>
                            <br/>
                            <br/>
                            </div>
                            <div className="col-md-15">
                            <div className="card-body">
                                <h5 className="card-title">
                                <Link to={`/singleconcert/${concert._id}`} className="btn btn-danger">Go to concert<br/>{concert.title}</Link></h5>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
        </div>
    </div>
  )                            
}

export default AllConcerts

