import { Link, useNavigate } from "react-router-dom"
import './Login.css'
import { useState } from "react"
import axios from "axios"

const LoginPage = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const navigate = useNavigate()

    async function handleSubmit(e){
        e.preventDefault();
        axios.post('http://localhost:8000/authentication/login', { email, password })
            .then(result => {
                console.log(result.data);
                navigate('/')
            })
            .catch(err => {
                console.error(err);
            });
    }
    return (
            <section id="login">
                <h1>Login</h1>
                <h2>Please login your account here</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required />

                    <button type="submit" className="login-btn">Login</button>
                    <div className="footer">
                        <p>Don't have an account? <Link to="/authentication/register">Register</Link></p>
                    </div>
                </form>
            </section>
    )
}

export default LoginPage