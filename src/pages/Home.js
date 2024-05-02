import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate=useNavigate();
    function clickHandler(route){
         navigate(route);
    }

  return (
    <div>Home
        <div onClick={()=> clickHandler("/ci")}>
            Compound Interest Calculator
        </div>
        <div onClick={()=> clickHandler("/pv")}>
            Preset Value Calculator
        </div>
        <div onClick={()=> clickHandler("/breakEven")}>
            Break Even Point Calculator
        </div>
        <div onClick={()=> clickHandler("/investmentCalc")}>
            Investement Time Calculator
        </div>
        <div onClick={()=> clickHandler("/cagr")}>
            Annualized Return Calculator
        </div>
    </div>
  )
}

export default Home