import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

const LogoutBtn = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout())
                navigate('/login')
            })
            .catch(() => {
                console.log("error logging out from LogoutBtn");
            })
    }

  return (
    <button
        className='inline-block duration-200 rounded-lg'
        onClick={logoutHandler}
    >
        Logout
    </button>
  )
}

export default LogoutBtn
