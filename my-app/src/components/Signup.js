// import { useState } from "react"
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import { ToastContainer, toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


const Signup = () => {
    const navigate = useNavigate();
    const [formdata, setFormdata] = useState({
        email: '',
        username: '',
        password: '',
        password2: ''

    })
    const [error, setError] = useState('')


    const handleOnChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }

    const { email, username, password, password2 } = formdata

    const handleSubmit = async(e) => {
        e.preventDefault()
        if (!email || !username || !password || !password2) {

            setError('all fields are required')
        }else{
            console.log(formdata)
            const res= await axios.post('http://127.0.0.1:8000/register/', formdata)
            if (res.status===201){
                navigate()

            }

        }
        
    }



    return (
        <div>
            <div className='form-container'>
                <div className='wrapper'>
                    <h1>
                        Create account
                    </h1>
                    <p style={{ color: 'red' }}>{error ? error : " "}</p>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor=''>Email Address:</label>
                            <input type='text' className='email-from' name='email' value={email} onChange={handleOnChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>username:</label>
                            <input type='text' className='email-from' name='username' value={username} onChange={handleOnChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>password:</label>
                            <input type='password' className='email-from' name='password' value={password} onChange={handleOnChange} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor=''>conform password:</label>
                            <input type='password' className='email-from' name='password2' value={password2} onChange={handleOnChange} />
                        </div>
                        <input type='submit' value='Submit' className='submitbutton' />

                    </form>
                    <h3>or</h3>
                    <div className='GoogleContainer'>
                        <button>signup with google</button>
                    </div>
                    <div className='microsoftContainer'>
                        <button>signup with microsoft</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Signup
