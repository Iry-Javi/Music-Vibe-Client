import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const SignupPage = () => {
    const [user, setUser] = useState({username: '', email: '', password: ''});
    const navigate = useNavigate()

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser(user => ({...user, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, user)
            .then(() => navigate('/login'))
            .catch(err => console.error(err))
    }


    return (
    <div className="card mb-4 p-5 h-100 bg-dark" style={{Width: '400px'}}>
    <ul className="list-group list-group-flush">
        <li className="list-group-item">   
            <form onSubmit={handleSubmit}>
                <input className="form-control mb-2" type="text" name="username" value={user.username} onChange={handleChange} placeholder= "Username"/>
                <input className="form-control mb-2" type="text" name="email" value={user.email}  onChange={handleChange} placeholder= "Email"/>
                <input className="form-control" type="password" name="password" value={user.password}  onChange={handleChange} placeholder= "Password"/>
                <button type="submit" className="btn btn-light m-1 ">Signup</button>
            </form>
        </li>
    </ul>
</div>
    )
}

export default SignupPage