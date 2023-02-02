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
    <div className="d-lg-flex justify-content-center">
    <div className="list-group mb-4 p-5 h-100 bg-black" style={{maxWidth: '600px'}}>
        <ul className="list-group list-group-flush">
            <li className="list-group-item bg-dark">   
            <form onSubmit={handleSubmit}>
            <input type="text" name="username" className="form-control mb-2" value={user.username} onChange={handleChange} placeholder='Username'/>
            <input type="password" name="password" className="form-control mb-2" value={user.password}  onChange={handleChange} placeholder='Password'/>
            <button type="submit" className="btn btn-light btn-sm m-1 ">Log In</button>
           </form>
            </li>
        </ul>
    </div>
    </div>   
    )
}

export default LoginPage
