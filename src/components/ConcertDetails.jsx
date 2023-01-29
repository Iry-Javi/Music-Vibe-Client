import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ConcertCard from "./ConcertCard";
 
 
function ConcertDetails (props) {
  const [concert, setConcert] = useState(null);
  
  const {concertId} = useParams()

  const getConcert = () => {
    const storedToken = localStorage.getItem("authToken");

    axios
      .get(`${process.env.REACT_APP_API_URL}/api/projects/${concertId}`, { headers: { Authorization: `Bearer ${storedToken}` } })
      .then((response) => {
        const oneConcert = response.data;
        setConcert(oneConcert);
      })
      .catch((error) => console.log(error));
  };
 
  useEffect(()=>{
        getConcert()
        // eslint-disable-next-line
  }, [concertId])
  
  return (
    <div className="ConcertDetails">
      {concert && (
        <>
          <ConcertCard {...concert} />
        </>
      )}
 
      <Link to="/concerts"><button>Back to concert</button></Link>
      <Link to={`/concerts/edit/${concertId}`}><button>Edit Concert</button>
      </Link>      
    </div>
  );
}
 
export default ConcertDetails;




























// function BeerFullDetails(props) {

//     const { beerData } = props;

//     return (
//         <>  
//             <div className="mt-4">
//                 <img src={ beerData.image_url } alt={ beerData.name } style={ { maxHeight: "300px" } } className="mb-5" />
//                 <div className="d-flex justify-content-between">
//                     <h2>{ beerData.name }</h2>
//                     <p>{ beerData.attenuation_level }</p>
//                 </div>
//                 <div className="d-flex justify-content-between">
//                     <p>{ beerData.tagline }</p>
//                     <p>{ beerData.first_brewed }</p>
//                 </div>
//                 <div className="text-start">
//                     <p>{ beerData.description }</p>
//                     <p>{ beerData.contributed_by }</p>
//                 </div>
//             </div>
//         </>
//     )

// }

// export default BeerFullDetails;