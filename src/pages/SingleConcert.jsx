import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import ConcertCard from "../components/ConcertCard";


function SingleConcert() {
  

    const [ concerts, setConcertData ] = useState(null);
    const { id } = useParams();

    
      const getSingleConcert = () => {
        const storedToken = localStorage.getItem('authToken')

        axios.get(`${process.env.REACT_APP_API_URL}/api/concerts `,  { headers: { Authorization: `Bearer ${storedToken}`}})
        .then(response => 
          setConcertData(response.data));
        }

    useEffect(() => {
      getSingleConcert ()
    });

    return (
        <>
        <div className="ConcertList">
        {concerts.map((concert) => 
        <ConcertCard key ={concert.concert_id} {...concert} />)
        }     
            </div>
        </>
    );
}

export default SingleConcert;




// import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import axios from 'axios';



// function Concert() {
//   const [concert, setConcert] = useState({});
//   const { concertId } = useParams();

//   const getSingleConcert = () => {
//     const storedToken = localStorage.getItem('authToken')
                 
//     axios
//       .get(`${process.env.REACT_APP_API_URL}/api/concerts/${concertId}`, { headers: { Authorization: `Bearer ${storedToken}`}})
//       .then((response) => {
//         console.log('response.data', response.data);
//         setConcert(response.data)
//       })
//       .catch((error) => console.log(error));
//     };

//       useEffect(() => {
//         getSingleConcert();
//         // eslint-disable-next-line
//     }, []);

//   return (
//     <div>
//       <div className='container'>
//       <div className='row'>
//       <div className="card mb-3"/>
//         <div className="row g-0">
//         <div className="col-md-4">
//           <img src={concert.imageUrl} className="img-fluid rounded-start" alt="..." style={{objectFit: 'scale-down', width: '250px', height: '250px'}}/>
//         </div>
//         <div className="col-md-8 text-start"></div>
//         <div className="card-body"></div>
//           <h5 className="card-title text-uppercase fw-bold">Title: {concert.title}</h5>
//           <p className="card-text">Image: {concert.imageUrl}</p>
//           <p className="card-text">Description: {concert.description}</p>
//           <p className="card-text">Country: {concert.country}</p>
//           <p className="card-text">City: {concert.city}</p>
//           <p className="card-text">Street: {concert.street}</p>
//           <p className="card-text">House numbre: {concert.hoseNumber}</p>
//           <p className="card-text">Postal code: <small className="text-muted">{concert.postal_code}</small></p>

//         </div>
//     </div>
//     </div>
        
//         </div>
  
//   )
// }

// export default Concert;