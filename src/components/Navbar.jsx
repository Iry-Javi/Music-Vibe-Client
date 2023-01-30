import { Link } from "react-router-dom";
import { useContext } from "react";                    
import { AuthContext } from "../context/auth.context";
import Home from "../assets/home.logo.png"
 
function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
   <nav>
      <Link to="/">
        <button><img src={Home} className="card-img-top " alt="..." style={{width: '60px', height: '60px'}}/></button>
      </Link>
      {user && <span>Welcome back {user.username}</span>}
    
      {isLoggedIn && (
        <>
        <Link to="/profile"> <button>Profile</button> </Link>    
        <Link to="/concerts"><button>All Concerts</button></Link>           
          <button onClick={logOutUser}>Logout</button>
        </>
      )}
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
    </nav>
  );
}
 
export default Navbar;