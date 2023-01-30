import { Link } from "react-router-dom"
import { useState, useContext } from "react";
import axios from "axios";
import {AuthContext} from "../context/auth.context"

const ProfilePage = props => {
    const [image, setImage] = useState("");
    const { user, setUser, isLoggedIn, logOutUser } = useContext(AuthContext);

    const handleFileUpload = (e) => {
     
        const uploadData = new FormData();
     
        uploadData.append("image", e.target.files[0]);
     
        axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData)
          .then(response => {
            setImage(response.data.image);
          })
          .catch(err => console.log("Error while uploading the file: ", err));
      };

      const handleSubmit = (e) => {
        e.preventDefault();

        axios.put(`${process.env.REACT_APP_API_URL}/api/users`, {...user, image})
            .then((response)=> {
                setUser(response.data.updatedUser);
                setImage("")
            })
            .catch(err => console.error(err))
        }

    return (
    <>
        <div>
          <p>Welcome {user.username}</p>
        </div>
        <div>
            {user && user.image && <img src={user.image} alt={"profile_image"} style={{width: '80px', height: '80px', borderRadius: '75%'}} />}
            {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )} 
            {isLoggedIn && <button onClick={logOutUser}>Log out</button>}
            {isLoggedIn && 
              <form onSubmit={handleSubmit}>
              <input type="file" onChange={(e) => handleFileUpload(e)} />
              <button type="submit">Save profile image</button>
              </form>}
              <br/>
              <div>
              <Link to="/addconcerts"><button>Add Concert</button></Link>
            </div>    
    </div>
    </>
 )
}

export default ProfilePage























// import axios from 'axios';
// import React, { useContext, useState } from 'react'
// import { AuthContext } from '../context/auth.context';
// import { Link } from 'react-router-dom';

// export const ProfilePage = () => {
//   const [image, setImage] = useState("");
//   const { user, setUser, isLoggedIn, logOutUser} = useContext(AuthContext);


//   const handleFileUpload = (e) => {
     
//     const uploadData = new FormData();
 
//     uploadData.append("image", e.target.files[0]);
 
//     axios.post(`${process.env.REACT_APP_API_URL}/api/upload`, uploadData)
//       .then(response => {
//         setImage(response.data.image);
//       })
//       .catch(err => console.log("Error while uploading the file: ", err));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     axios.put(`${process.env.REACT_APP_API_URL}/api/users`, {...user, image})
//         .then((response)=> {
//             setUser(response.data.updatedUser);
//             setImage("")
//         })
//         .catch(err => console.error(err))
//     }

//   return (
//     <div>
//     <h1>Welcome {user.username} </h1>

//     {user && user.image && <img src={user.image} alt={"profile_image"} style={{width: '80px', height: '80px', borderRadius: '75%'}} />}
//     <br/>
//     {isLoggedIn && 
//     <form onSubmit={handleSubmit}>
//     <input type="file" onChange={(e) => handleFileUpload(e)} />  
//     </form>}
//     <br/>
//     <button type="submit">Save profile image</button>
//     <br/>
//     <br/>
//     <Link to="/addconcerts"><button>Add Concert</button></Link>
//     </div>
//   )
// }