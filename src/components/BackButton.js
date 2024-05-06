import React from 'react'
import { useNavigate } from 'react-router-dom'
import './BackButton.css'

function BackButton() {
  const navigate = useNavigate();
  return (
    <div>
      <button className='ci-backbutton' onClick={() => navigate("/home")}>Home</button>
    </div>
  )
}

export default BackButton