import React from 'react'
import { HiOutlineHome } from "react-icons/hi2";


import { useNavigate } from 'react-router-dom'
import './BackButton.css'

function BackButton() {
  const navigate = useNavigate();
  return (
    <div className='btn-container'>
        {/* <div className="icon-container">
        <HiOutlineHome className="icon" style={{ color: 'red' }}/>
      </div> */}
      <button className='ci-backbutton' onClick={() => navigate("/home")}>Home</button>
    </div>
  )
}

export default BackButton