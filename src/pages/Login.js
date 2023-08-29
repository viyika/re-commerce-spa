import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';

const Login = () => {
    const location = useLocation();
    const redirectFrom = location?.state?.from
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailOrPhone = e.target.emailOrPhone.value;
        
        if(emailOrPhone) {
            dispatch( login({user: emailOrPhone}));
            redirectFrom ? navigate(redirectFrom) : navigate('/');
        } else {
            return null;
        }
    }

    return (
        <div id="div__login">
            <div id="div__login__container">
                <form onSubmit={handleSubmit}>
                    <input type="text" name='emailOrPhone' placeholder="Email / Phone" />
                    <button type='submit'>Continue</button>
                </form>
                <Link to="/register">Register</Link>
            </div>
        </div>
    )
}

export default Login