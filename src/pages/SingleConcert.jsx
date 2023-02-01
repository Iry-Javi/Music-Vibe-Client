import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function SingleConcert() {
const [concert, setConcert] = useState({});
const {concertId}=useParams()
const [comment, setComment] = useState('')


const getOneConcert = () => {
    const storedToken = localStorage.getItem('authToken')

    axios
    .get(`${process.env.REACT_APP_API_URL}/api/concerts/${concertId}`, { headers: { Authorization: `Bearer ${storedToken}`}})
    .then((response) => {
    setConcert(response.data);
    })
}
const handleSubmit = (e) => {
    e.preventDefault()
    const storedToken = localStorage.getItem('authToken')
    axios
    .post(`${process.env.REACT_APP_API_URL}/api/comments`, {comment, concert: concertId}, { headers: { Authorization: `Bearer ${storedToken}`}})
    .then(() => {
        getOneConcert()
        setComment('')
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
       
        
      
        <div className="ConcertDetails">
        <div className="card-title text-center">
        
        <br/>
        <Link to="/concerts"><button className="btn btn-light btn-sm m-1 ">Back to concerts list</button></Link>
        {concert &&  (<Link to={`/concerts/edit/${concert._id}`}><button className="btn btn-light btn-sm m-1 ">Edit Concert</button></Link>)}
        <button className="btn btn-light btn-sm m-1" value={comment} type="submit">Add a comment</button>
        </div> 
        </div>
        <form onSubmit={handleSubmit}>
        <textarea type="text" value={comment} onChange={(e) => setComment(e.target.value)} name="comment" className="form-control" placeholder='Comment'></textarea>
        <button className="btn btn-light btn-sm m-1" type="submit">Create comment</button>
        </form>

        {concert.comments && concert.comments.map(comment => {
            return (
                <div>{comment.comment} - {comment.user.username}</div>
                

            )
        })
        }                        
    </div>
    </div>
          

)
}

export default SingleConcert