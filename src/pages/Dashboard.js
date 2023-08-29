import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
    const {isLoggedIn, user} = useSelector(state => state.auth)
    return (
        <div>
            Dashboard {isLoggedIn ? `Welcome ${user.user}` : null}
            <br /> 
            {isLoggedIn ? <NavLink to="/logout">Logout</NavLink> : <NavLink to="/login">Login</NavLink>}
        </div>
    )
}

export default Dashboard