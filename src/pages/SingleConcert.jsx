import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleConcert() {
const [concert, setConcert] = useState({});
const {concertId}=useParams()


const getOneConcert = () => {
    const storedToken = localStorage.getItem('authToken')

    axios
    .get(`${process.env.REACT_APP_API_URL}/api/concerts/${concertId}`, { headers: { Authorization: `Bearer ${storedToken}`}})
    .then((response) => {
    setConcert(response.data);
    })
}

useEffect(() => {
    getOneConcert();
    // eslint-disable-next-line
}, [] );

return (
         
            
    <div className="card text-start fw-bolt mt-2 bg-black">
    <div className="card-body">
    <h4 className="card-title text-center">Title: {concert.title}</h4>
    <img src={concert.image} className="rounded mx-auto d-block" alt="..." style={{objectFit: 'scale-down', width: '300',  height: '300px'}}/>
    <br/>
        <ul className="list-group">
            <li className="list-group-item text-bg-dark">Description: {concert.description}</li>
            <li className="list-group-item text-bg-dark">Country: {concert.country}</li>
            <li className="list-group-item text-bg-dark">City: {concert.city}</li>
            <li className="list-group-item text-bg-dark">Street: {concert.street}</li>
            <li className="list-group-item text-bg-dark">House Number: {concert.houseNumber}</li>
            <li className="list-group-item text-bg-dark">Postal Code: {concert.postalCode}</li>
        </ul>
       
        {/* <button type="submit">Send Comment</button> */}
      
        <div className="ConcertDetails">
        <div className="card-title text-center">
        {concert.comments && concert.comments.map(comment => {
            return (
                <div>{comment.comment}</div>
                
            )
        })
        }
        <br/>
        <Link to="/concerts"><button className="btn btn-light btn-sm m-1 ">Back to concerts list</button></Link>
        {concert &&  (<Link to={`/concerts/edit/${concert._id}`}><button className="btn btn-light btn-sm m-1 ">Edit Concert</button></Link>)}
        </div> 
        </div>                          
    </div>
    </div>
          

)
}

export default SingleConcert