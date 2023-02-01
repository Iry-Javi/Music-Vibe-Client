import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import axios from "axios";

    const LoginPage = () => {
    const [user, setUser] = useState({username: '', password: ''});
    const navigate = useNavigate();
    const {storeToken, authenticateUser} = useContext(AuthContext);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(user => ({...user, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, user)
        .then((response) => {
        storeToken(response.data.authToken)
        authenticateUser()
        navigate("/")
    })
        .catch(err => console.error(err))

    }
    return (
        <div class="card width: 18rem;">
  <div class="card-header">
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">   
       <form onSubmit={handleSubmit}>
            <input type="text" name="username" class="form-control mb-2" value={user.username} onChange={handleChange} placeholder='Username'/>
            
            <input type="password" name="password" class="form-control mb-2" value={user.password}  onChange={handleChange} placeholder='Password'/>
            
            <button type="submit" className="btn btn-light btn-sm m-1 ">Log In</button>
           </form>
        </li>
   
    </ul>
</div>
    )
}

export default LoginPage