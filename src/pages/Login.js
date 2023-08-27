import React from 'react'

const Login = () => {
  return (
    <div id="div__login">
        <div id="div__login__container">
            <form action='/login'>
                <input type="text" placeholder="Email / Phone" />
                <button type='submit'>Continue</button>
            </form>
            <a href="#">Register</a>
        </div>
    </div>
  )
}

export default Login