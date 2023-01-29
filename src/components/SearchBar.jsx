// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import ConcertDetails from "../components/ConcertDetails";
// import axios from 'axios';



// function Search() {
//     const [ filteredConcerts, setFilteredConcerts ] = useState(null);
//     const [searchParams, setSearchParams ] = useSearchParams();
//     const s = searchParams.get('s');

    
//         const getSearchConcerts = () => {
//             const storedToken = localStorage.getItem('authToken')

//         axios.get(`${process.env.REACT_APP_API_URL}/api/concerts`, { headers: { Authorization: `Bearer ${storedToken}`}});
//             .then((response) => {
//                 setSearchParams (response.data)
//             })
//             const filteredList = data.filter(el => el.name.toLowerCase().includes(s.toLowerCase()))
//             return setFilteredConcerts(filteredList)                  
//         }


//     useEffect(() => {
//         getSearchConcerts()
//     }, [s])


//     if ( !filteredConcerts ) return <p>Loading...</p>

//     return(
//         <>
//             { filteredConcerts.map(concert => <ConcertDetails concertData={ concert } key={ concert._id } />)}
//         </>
//     )

//     }

// export default Search;