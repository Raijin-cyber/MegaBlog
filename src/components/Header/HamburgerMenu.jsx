import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutBtn from './LogoutBtn';
import { useNavigate } from 'react-router-dom';

const HamburgerMenu = ({navItems}) => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = React.useState(false);
    const authStatus = useSelector((state) => state.auth.status);

  return isOpen ? 
    (<div className='fixed flex flex-col top-0 left-0 w-1/2 z-100 h-screen p-5 bg-[#191919]/95 shadow-2xl text-[#f5f5f5]'>
        <div className='flex justify-end'>
            <i 
                className="fa-solid fa-xmark"
                onClick={() => setIsOpen(false)}
            ></i>
        </div>
        <ul className='flex flex-col mt-5 gap-y-5'>
            {navItems.map((item, index) => (
                item.active && (
                    <Link
                        key={index}
                        to={item.slug}
                        onClick={() => navigate(item.slug)}
                        className='active:scale-95 active:font-bold font-semibold duration-75'
                    >
                        {item.name}
                    </Link>
                )
            ))}
            <div className='hover:scale-105 active:scale-95 active:font-bold font-semibold duration-75'>
                {authStatus && <LogoutBtn onClick={() => navigate("/")}/>}
            </div>
        </ul>
    </div>) 
    : 
    (<div className='active:bg-slate-100/10 rounded-lg px-3 py-2 duration-75'>
        <i 
            className="fa-solid fa-bars"
            onClick={() => setIsOpen(true)}
        ></i>
    </div>)
}

export default HamburgerMenu
