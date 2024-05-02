import React from 'react'
import { useNavigate } from 'react-router-dom'

function BackButton() {
    const navigate=useNavigate();
  return (
    <div>
        <button onClick={()=> navigate("/")}>Go Back</button>
    </div>
  )
}

export default BackButton