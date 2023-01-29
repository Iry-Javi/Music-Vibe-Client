import { Link } from "react-router-dom"
import { useState, useContext } from "react";
import axios from "axios";
import {AuthContext} from "../context/auth.context"

const HomePage = props => {
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
        <p>Welcome to the Music Vibe World</p>
      </div>
        <div>
          <Link to="/addconcerts"><button>Add Concert</button></Link>      
          <Link to="/concerts"><button>All Concerts</button></Link>
          <Link to="/singleconcert"><button>Single Concert</button></Link>
          <br/>
          <br/>
          {user && user.image && <img src={user.image} alt={"profile_image"} style={{width: '80px', height: '80px', borderRadius: '75%'}} />}
          <br/>
          {isLoggedIn && <form onSubmit={handleSubmit}>
          <input type="file" onChange={(e) => handleFileUpload(e)} />
          {/* {isLoggedIn && <button onClick={logOutUser}>Log out</button>} */}
          </form>}
          <br/>
          <button type="submit">Save profile image</button>
          <br/>
          {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
      <br/>
          

            {/* {!isLoggedIn && <>
                <Link to={'/signup'}><button>Signup</button></Link>
                <Link to={'/login'}><button>Login</button></Link>} */}
                
      </div>
    </>
 )
}

export default HomePage


