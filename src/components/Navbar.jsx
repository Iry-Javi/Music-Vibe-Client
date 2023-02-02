import { Link } from "react-router-dom";
import { useContext } from "react";                    
import { AuthContext } from "../context/auth.context";
import Home from "../assets/home.png"
 
function Navbar() {
  const { isLoggedIn, logOutUser } = useContext(AuthContext);

  return (
   <nav className="navbar navbar-expand mb-5">
   <div className="container-fluid justify-content-space-around">
  
      <Link to="/">
        <img src={Home} className="navbar-brand" alt="..." style={{width: '50px', height: '60px'}}/>
      </Link>
      

      {isLoggedIn && (
        <div className="d-flex">
        <Link to="/concerts"><button className="btn btn-light btn-sm m-1" >All Concerts</button></Link>
          <Link to="/profile"><button className="btn btn-light btn-sm m-1">Profile</button></Link>
          <button className="btn btn-light btn-sm m-1" onClick={logOutUser}>Logout</button>
        </div>
      )}
 
      {!isLoggedIn && (
        <div className="d-flex-end">
          <Link to="/signup"> <button className="btn btn-light btn-sm m-1 text-bg-gray">Sign Up</button> </Link>
          <Link to="/login"> <button className="btn btn-light btn-sm m-1 text-bg-gray">Login</button> </Link>
        </div>
      )}
      </div>
    </nav>
  );
}
 
export default Navbar;