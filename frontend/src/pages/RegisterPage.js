import axios from 'axios'
import React, { useState } from "react"
import './Register.css'


const RegisterPage = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/authentication/register', {name, email, password})
            .then(result => console.log(result.data))
            .catch(err => console.log(err))
    }

    return (
        <section id='register'>
            <h1>Registration</h1>
            <h2>Please register your account here</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Enter your email" autoComplete="off" onChange={(e) => setName(e.target.value)} required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" autoComplete="off" onChange={(e) => setEmail(e.target.value)}  required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Enter your password" autoComplete="off" onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit" className="register-btn">Register</button>
            </form>
        </section>
    )
}

export default RegisterPage