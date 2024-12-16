import React, { useState } from 'react'
import './index.css'
import { registerApi } from '../../axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rePassword, setRePassword] = useState("")
  const navigate = useNavigate()
  const notify = (message) => toast(message);

  function validate() {
    if (!username) {
      alert("Please Enter username!")
      return false
    }

    if (username.length < 3) {
      alert("Username must be at least 3 characters long")
      return false
    }

    if (!email) {
      alert("Please Enter email!")
      return false
    }

    if (!email.endsWith("@gmail.com")) {
      alert(`Email address must end with "@gmail.com"`)
      return false
    }

    if (!password) {
      alert("Please Enter Password!")
      return false
    }

    if (!rePassword) {
      alert("Please Enter RePassword!")
      return false
    }

    if (password !== rePassword) {
      alert("Password and RePassword must be the same");
      return false;
    }

    return true
  }

  function handleRegister(event) {
    event.preventDefault()

    const isValid = validate()
    if (!isValid) {
      return
    }

    const user = {
      username: username,
      email: email,
      password: password
    }

    registerApi.post(`auth/signup`, user, {
      headers: {
        "Content-Type": "application/json"
      }
    })

      .then(response => {
        if (response.status == 200) {
          return response.json()
        }
      })

      .then(data => {
        if (data.message == "Failed! Username is already in use!" || data.message == "Failed! Email is already in use!") {
          notify(data.message)
        }

        if (data.message == "User registered successfully!") {
          notify(data.message)
          navigate('/login')
        }
      })

      .catch(error => {
        console.log(error);
      })
  }

  return (
    <div className='container'>
      <h2>Register</h2>
      <form className="form">
        <label htmlFor="username">Enter Your Username</label>
        <input value={username} onChange={(e) => { setUsername(e.target.value) }} type="text" name="username" id="username" placeholder='Enter your username...' />

        <label htmlFor="email">Enter Your Email</label>
        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" name="email" id="email" placeholder='Enter your email...' />

        <label htmlFor="password">Enter Your Password</label>
        <input value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" name="password" id="password" placeholder='Enter your password...' />

        <label htmlFor="rePassword">Enter Your Re-Password</label>
        <input value={rePassword} onChange={(e) => { setRePassword(e.target.value) }} type="password" name="rePassword" id="rePassword" placeholder='Re-Enter your password...' />

        <button onClick={handleRegister} className="btn" type='submit'>Register</button>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          limit={1}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </form>
    </div>
  )
}

export default Register
