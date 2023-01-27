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
        <div>
            <h1>Sign up Page</h1>

            <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleChange} />
            <br />
            <label>Email</label>
            <input type="text" name="email" value={user.email}  onChange={handleChange} />
            <br />
            <label>Password</label>
            <input type="password" name="password" value={user.password}  onChange={handleChange} />
            <br />
            <button type="submit">Create the account</button>
        </form>
        </div>
    )
}

export default SignupPage