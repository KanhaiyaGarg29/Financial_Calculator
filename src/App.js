import React from 'react'

import { Route, Routes } from "react-router-dom";
import CICalc from './components/CICalc';
import Home from './pages/Home';
import PresetValue from './components/PresetValue';
import BreakEven from './components/BreakEven';
import InvestmentTimeCalc from './components/InvestmentTimeCalc';
import Login from './pages/Login';
import  Signup  from './pages/Signup';

import CAGR from './components/CAGR';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/ci" element={<CICalc></CICalc>}></Route>
        <Route path="/pv" element={<PresetValue></PresetValue>}></Route>
        <Route path="/breakEven" element={<BreakEven></BreakEven>}></Route>
        <Route path="/investmentCalc" element={<InvestmentTimeCalc></InvestmentTimeCalc>}></Route>
        <Route path="/cagr" element={<CAGR></CAGR>}></Route>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

      </Routes>
    </div>
  )
}

export default App