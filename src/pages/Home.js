import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Home.css';

function Home() {
  const navigate = useNavigate();

  function clickHandler(route) {
    navigate(route);
  }

  function handleLogout() {
    navigate('/'); // Redirect to the login or home page
  }

  return (
    <div className="home-container">
      <div className="text-container">
        <h1 className='heading-home'>CashFlow Companion</h1>
        <h1 className='text-cursive'>Empower Your Finances with Our Ultimate Toolkit !</h1>
        <h4 className='text-home'>Finance doesn't have to be confusing. Our website is designed to simplify complex financial concepts and give you the insights you need
          to make smarter decisions. From calculating compound interest to determining the break-even point for your business, our calculators cover
          a wide range of financial topics. Whether you're planning for a major purchase, assessing loan terms, or just trying to get a better
          understanding of your financial situation, we've got you covered. Start your journey to financial clarity today.</h4>
      </div>

      <div className="home-small-container">
        <div
          className="home-item"
          onClick={() => clickHandler("/ci")}
        >
          Compound Interest Calculator
        </div>
        <div
          className="home-item"
          onClick={() => clickHandler("/pv")}
        >
          Present Value Calculator
        </div>
        <div
          className="home-item"
          onClick={() => clickHandler("/breakEven")}
        >
          Break-Even Point Calculator
        </div>
        <div
          class="home-item"
          onClick={() => clickHandler("/investmentCalc")}
        >
          Investment Time Calculator
        </div>
        <div
          className="home-item"
          onClick={() => clickHandler("/cagr")}
        >
          Annualized Return Calculator
        </div>

        <div className="logout-container">
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
