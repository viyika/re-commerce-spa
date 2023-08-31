import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/authSlice';

const Logout = () => {
    const [count, setCount] = useState(0);
    const [countInTimeout, setCountInTimeout] = useState(0);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(logout());

        setTimeout(() => {
            console.log("setTimeOut...")
            navigate("/");
        }, 2000)
    }, [])

    return (
        <div>
            Logging you out, Please wait...
        </div>
    )
}

export default Logout