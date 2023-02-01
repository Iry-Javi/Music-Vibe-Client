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
      <p>Welcome to your profile {user && user.username}</p>
      {user && user.image && <img src={user.image} alt={"profile_image"} style={{width: '80px', height: '80px', borderRadius: '75%'}} />}
    </div>
        {isLoggedIn && 
          <form onSubmit={handleSubmit}>
          <input className="btn btn-light btn-sm m-1 " type="file" onChange={(e) => handleFileUpload(e)} />
          <button type="submit" className="btn btn-light btn-sm m-1 ">Save profile image</button>
          </form>}
          <br/>
          <div>
            <Link to="/addconcerts"><button className="btn btn-light btn-sm m-1 ">Add Concert</button></Link>
              
              
          <div className="row row-cols-1 row-cols-md-4 g-3 m-5">
          {user.concert && user.concert.map(singleConcert => {
            return <div key={singleConcert._id}>

              
              <div className="card mb-3 p-5 h-100" style={{maxWidth: '540px'}}>
              <div className="row g-0">
              <div className="col-md-4">
                <img src={singleConcert.image} className="text-center" alt="..."   style={{objectFit: 'scale-down', width: '200px', height: '200px'}}/>
              </div>
              <div className="col-md-15">
              <div className="card-body">
              <h5 className="card-title">
                <Link to={`/singleconcert/${singleConcert._id}`}> {singleConcert.title}</Link></h5>
              </div>
              </div>
              </div>
              </div>
              </div>
      })}
      </div>    
    </div>
    </>
 )
}

export default ProfilePage