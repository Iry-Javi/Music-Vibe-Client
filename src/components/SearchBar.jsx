// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import ConcertCard from "../components/ConcertCard";
// import axios from 'axios';

// function Search() {
//     const [ filteredConcerts, setFilteredConcerts ] = useState(null);
//     const [searchParams, setSearchParams ] = useSearchParams();
//     const s = searchParams.get('s');

//         const getSearchConcerts = () => {
//             axios.get(`${process.env.REACT_APP_API_URL}/api/concerts`)
//             .then((response) => {
//                 const data = response.data
//                 .then((response) =>{
//                     setSearchParams(response.data)
//                 const filteredList = data.filter(el => el.name.toLowerCase().includes(s.toLowerCase()))
//                 return setFilteredConcerts(filteredList)
//                 })
//             })
//         }
//             useEffect(() => {
//                 getSearchConcerts()
//             }, [s])                
//         }

//     return (        
//     <>
//         { filteredConcerts.map(concert => 
//         <ConcertCard concertData={ concert } key={ concert._id } />)}
//     </>
//     )
// }

// export default Search;