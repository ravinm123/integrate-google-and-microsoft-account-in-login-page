import React,{useState} from 'react'

const Login = () => {
  return (
    <div>
        <div><div className='form-container'>
            <div className='wrapper'>
            <h1>
                user login
            </h1>
            <form>
            <div className='form-group'>
                    <label htmlFor=''>Email Address:</label>
                    <input type='text' className='email-from' name='email'/>
                </div>
                <div className='form-group'>
                    <label htmlFor=''>password:</label>
                    <input type='password' className='email-from' name='password'/>
                </div>
                <input type='submit' value='Submit' className='submitbutton'/>

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

     
    </div>
  )
}

export default Login
