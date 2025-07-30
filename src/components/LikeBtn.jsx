import React from 'react'

const LikeBtn = ({LikeState, onClick, className}) => {
  return (
    <button className={`w-9 h-9 rounded-full bg-[#f5f5f5] ${className}`}
        onClick={onClick}
    >
        {LikeState ? 
            <div>
                <i className="fa-solid fa-heart"></i>
            </div> 
            : 
            <div>
                <i className="fa-regular fa-heart"></i>
            </div>
        }
    </button>
  )
}

export default LikeBtn
