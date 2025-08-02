import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import HamburgerMenu from './HamburgerMenu'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "My Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  {
      name: "Profile",
      slug: "/profile",
      active: authStatus, 
  },
  {
      name: "Setting",
      slug: "/setting",
      active: authStatus, 
  },
  ]


  return (
    <header className='flex justify-between items-center w-full py-3 px-3 bg-[#191919] text-[#f5f5f5]'>
      <div className='md:flex hidden justify-between items-center w-full'>
        <div><Logo /></div>
        <div className='flex items-center'>
          <div className='hover:bg-slate-100/10 rounded-lg px-3 py-2 duration-75'>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <ul className='flex items-center'>
            {
              navItems.map((item, index) => (
                item.active && (
                  <Link 
                    key={index} 
                    to={item.slug} 
                    className='hover:bg-slate-100/10 rounded-lg px-3 py-2 duration-75'
                  >
                    {item.name}
                  </Link>
                )
              ))
            }
            {authStatus && 
            <div className='hover:bg-slate-100/10 rounded-lg px-3 py-2 duration-75'>
              <LogoutBtn 
                onClick={() => navigate('/')}
              ></LogoutBtn>  
            </div>}
          </ul>
        </div>
      </div>

      {/* for mobile screens */}
      <div className='md:hidden flex justify-between items-center w-full'>
        <HamburgerMenu navItems={navItems} />
        <div className='absolute left-1/2 transform -translate-x-1/2'>
          <Logo />
        </div>
        <div className='active:bg-slate-100/10 rounded-lg px-3 py-2 duration-75'>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </header>
  )
}

export default Header