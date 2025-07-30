import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

const LogoutBtn = () => {

    const dispatch = useDispatch();
    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout())
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
