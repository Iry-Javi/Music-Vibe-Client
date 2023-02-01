import { Link } from "react-router-dom"
import { useState, useContext } from "react";
import axios from "axios";
import {AuthContext} from "../context/auth.context"

const ProfilePage = props => {
    const [image, setImage] = useState("");
    const { user, setUser, isLoggedIn, } = useContext(AuthContext);

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
          <p>Welcome to your profile {user.username}</p>
          {user && user.image && <img src={user.image} alt={"profile_image"} style={{width: '80px', height: '80px', borderRadius: '75%'}} />}
        </div>
        <div>
            {!isLoggedIn && (
        <>
          <Link to="/signup"> <button className="btn btn-light btn-sm m-1 ">Sign Up</button> </Link>
          <Link to="/login"> <button className="btn btn-light btn-sm m-1 ">Login</button> </Link>
        </>
      )} 
            {/* {isLoggedIn && <button onClick={logOutUser}>Log out</button>} */}
            {isLoggedIn && 
              <form onSubmit={handleSubmit}>
              <input className="btn btn-light btn-sm m-1 " type="file" onChange={(e) => handleFileUpload(e)} />
              <button type="submit" className="btn btn-light btn-sm m-1 ">Save profile image</button>
              </form>}
              <br/>
              <div>
              <Link to="/addconcerts"><button className="btn btn-light btn-sm m-1 ">Add Concert</button></Link>
            </div>    
    </div>
    </>
 )
}

export default ProfilePage