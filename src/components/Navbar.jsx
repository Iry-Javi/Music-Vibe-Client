import { Link } from "react-router-dom";
import { useContext } from "react";                    
import { AuthContext } from "../context/auth.context";
import Home from "../assets/home.logo.png"
 
function Navbar() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
   <nav className="navbar navbar-expand bg-primary">
   <div className="container-fluid justify-content-space-around">
  
      <Link to="/">
        <img src={Home} className="navbar-brand" alt="..." style={{width: '60px', height: '60px'}}/>
      </Link>
      {user && <span>Welcome back {user.username}{user && user.image && <img src={user.image} alt={"profile_image"} style={{width: '80px', height: '80px', borderRadius: '75%'}} />}</span>}

      {isLoggedIn && (
        <div className="d-flex">
        <Link to="/concerts"><button>All Concerts</button></Link>
          <Link to="/profile"><button>Profile</button></Link>
          <button onClick={logOutUser}>Logout</button>
        </div>
      )}
 
      {!isLoggedIn && (
        <>
          <Link to="/signup"> <button>Sign Up</button> </Link>
          <Link to="/login"> <button>Login</button> </Link>
        </>
      )}
      </div>
    </nav>
  );
}
 
export default Navbar;













// import { Link } from "react-router-dom";
// import { useContext } from "react";                    
// import { AuthContext } from "../context/auth.context";
// import Home from "../assets/home.logo.png"
 
// function Navbar() {
//   const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

//   return (
//    <nav className="navbar navbar-expand bg-primary">
//    <div className="container-fluid justify-content-space-around">
//     {/* <Link to="/search"><button>Search</button></Link> */}
//       <Link to="/">
//         <button><img src={Home} className="navbar-brand" alt="..." style={{width: '60px', height: '60px'}}/></button>
//       </Link>
//       {user && <span>Welcome back {user.username}</span>}
    
//       {isLoggedIn && (
//         <>
//         <Link to="/profile"> <button>Profile</button> </Link>    
//         <Link to="/concerts"><button>All Concerts</button></Link>

//           <button onClick={logOutUser}>Logout</button>
//         </>
//       )}
//       <div className="d-flex">
//       {!isLoggedIn && (
//         <div className="d-flex">
//         <>
//           <Link to="/signup"> <button>Sign Up</button> </Link>
//           <Link to="/login"> <button>Login</button> </Link>
//         </>
//       )}
//       </div>
//     </nav>
//   );
// }
 
// export default Navbar;