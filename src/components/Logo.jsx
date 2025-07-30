import { useNavigate } from "react-router-dom"

const Logo = ({width = '100px'}) => {
  const navigate = useNavigate()
  return (
    <span 
      className='font-bold text-2xl font-mono text-[#f5f5f5] cursor-pointer' 
      style={{width}}
      onClick={() => navigate('/')}
    >
      MegaBlog
    </span>
  )
}

export default Logo
